import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { EditCategoryModal } from "../../components/AdminComponent/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryAction,
  deleteCategoryAction,
  getAllCategory,
  updateCategoryAction,
} from "../../redux/actions/categoryActions";

const AdminCategory = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories || []);

  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleAdd = async () => {
    if (!newCategory.trim()) return;

    await dispatch(addCategoryAction({ nama_kategori: newCategory }));
    dispatch(getAllCategory());
    setNewCategory("");
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Yakin ingin menghapus kategori ini?");
    if (confirmed) {
      dispatch(deleteCategoryAction(id));
    }
  };

  const handleEdit = (id, name) => {
    setEditCategory({ id, name });
  };

  const handleUpdate = () => {
    if (!editCategory || !editCategory.name.trim()) return;

    const updatedData = { nama_kategori: editCategory.name };
    dispatch(updateCategoryAction(editCategory.id, updatedData));
    setEditCategory(null);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-50">
      <div className="w-64 text-white min-h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      <main className="flex-1 pt-10 pb-16 px-4 sm:px-6 md:px-8 md:ml-64 flex flex-col sm:flex-row justify-center items-start min-h-screen">
        <div className="w-full max-w-full sm:max-w-xl md:max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
            🌿 Manajemen Kategori Tumbuhan
          </h2>

          {/* Form Tambah */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center justify-center">
            <input
              type="text"
              placeholder="Tambah kategori baru"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 mt-2 sm:mt-0"
            >
              <Plus className="w-5 h-5" /> Tambah
            </button>
          </div>

          {/* Tabel Kategori */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-left min-w-[320px]">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="p-4 border-b">#</th>
                  <th className="p-4 border-b">Nama Kategori</th>
                  <th className="p-4 border-b text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <tr key={cat.id} className="hover:bg-green-50">
                      <td className="p-4 border-b">{index + 1}</td>
                      <td className="p-4 border-b">{cat.nama_kategori}</td>
                      <td className="p-4 border-b text-right space-x-3">
                        <button
                          onClick={() => handleEdit(cat.id, cat.nama_kategori)}
                          className="text-blue-600 hover:text-blue-800 transition"
                          aria-label={`Edit kategori ${cat.nama_kategori}`}
                        >
                          <Pencil className="inline w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="text-red-600 hover:text-red-800 transition"
                          aria-label={`Hapus kategori ${cat.nama_kategori}`}
                        >
                          <Trash2 className="inline w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-6 text-center text-gray-500">
                      Belum ada kategori.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Panggil komponen modal EditCategoryModal dan kirim propsnya */}
        <EditCategoryModal
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          handleUpdate={handleUpdate}
        />
      </main>
    </div>
  );
};

export default AdminCategory;
