import React from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../../redux/actions/categoryActions";

export const EditCategoryModal = ({ editCategory, setEditCategory }) => {
  const dispatch = useDispatch();

  if (!editCategory) return null;

  const handleUpdate = () => {
    if (!editCategory.name || editCategory.name.trim() === "") return;

    const payload = {
      nama_kategori: editCategory.name, // sesuai format backend
    };

    dispatch(updateCategoryAction(editCategory.id, payload));
    setEditCategory(null);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-green-700 mb-6 text-center">Edit Kategori</h3>
        <input
          type="text"
          value={editCategory.name}
          onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          placeholder="Nama kategori"
          autoFocus
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setEditCategory(null)}
            className="px-5 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Batal
          </button>
          <button
            onClick={handleUpdate}
            className="px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
