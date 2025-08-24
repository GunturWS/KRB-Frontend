import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { EditCategoryModal } from "../../components/AdminComponent/EditCategoryModal";
import {
  addCategoryAction,
  deleteCategoryAction,
  getAllCategory,
  updateCategoryAction,
} from "../../redux/actions/categoryActions";
import Swal from "sweetalert2";

const AdminCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories || []);

  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleAdd = async () => {
    if (!newCategory.trim()) return;

    try {
      await dispatch(addCategoryAction({ nama_kategori: newCategory }));
      dispatch(getAllCategory());
      setNewCategory("");

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Kategori berhasil ditambahkan ✅",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error adding category:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Kategori gagal ditambahkan ❌",
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus kategori ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(deleteCategoryAction(id));
          dispatch(getAllCategory());

          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Kategori berhasil dihapus ✅",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Kategori gagal dihapus ❌",
          });
        }
      }
    });
  };

  const handleUpdate = async () => {
    if (!editCategory || !editCategory.name.trim()) return;

    try {
      await dispatch(updateCategoryAction(editCategory.id, { nama_kategori: editCategory.name }));
      dispatch(getAllCategory());
      setEditCategory(null);

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Kategori berhasil diperbarui ✨",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error updating category:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Kategori gagal diperbarui ❌",
      });
    }
  };

  const handleEdit = (id, name) => {
    setEditCategory({ id, name });
  };
  const filteredCategories = categories.filter((cat) =>
    cat.nama_kategori.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-[20px] shadow-lg space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-semibold text-green-700">🌿 Manajemen Kategori</h1>

          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cari kategori..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-[240px] h-10 pl-4 pr-10 rounded-lg border border-gray-300 shadow-sm text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-green-400"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">🔍</div>
          </div>
        </div>

        {/* Form Tambah */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <input
            type="text"
            placeholder="Tambah kategori baru..."
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Plus className="w-5 h-5" />
            Tambah
          </button>
        </div>

        {/* Tabel Kategori */}
        <div className="mt-6">
          {/* Desktop Table */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 text-gray-500 text-sm font-medium border-b border-gray-200 pb-2">
              <div>No</div>
              <div>Nama Kategori</div>
              <div className="text-right">Aksi</div>
            </div>

            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <div
                  key={cat.id}
                  className={`grid grid-cols-3 items-center text-sm py-4 border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div>{index + 1}</div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      {cat.nama_kategori}
                    </span>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => handleEdit(cat.id, cat.nama_kategori)}
                      className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-600"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">Tidak ada kategori ditemukan.</div>
            )}
          </div>

          {/* Mobile Card List */}
          <div className="sm:hidden space-y-4">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <div
                  key={cat.id}
                  className="p-4 rounded-xl border border-gray-200 shadow-sm bg-white flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-gray-400">No. {index + 1}</p>
                    <p className="font-medium text-gray-700">{cat.nama_kategori}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(cat.id, cat.nama_kategori)}
                      className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-600"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">Tidak ada kategori ditemukan.</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Edit */}
      <EditCategoryModal
        editCategory={editCategory}
        setEditCategory={setEditCategory}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default AdminCategory;
