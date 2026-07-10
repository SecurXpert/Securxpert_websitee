import React from "react";
import { X } from "lucide-react";

export function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export function DeleteConfirm({ item, type, onConfirm, onClose }) {
  return (
    <Modal title="Confirm Delete" onClose={onClose}>
      <p className="text-slate-600 mb-6">
        Are you sure you want to delete <span className="font-bold text-slate-800">"{item?.title || item?.product}"</span>? This action cannot be undone.
      </p>
      <div className="flex gap-3 justify-end">
        <button onClick={onClose} className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
          Cancel
        </button>
        <button onClick={onConfirm} className="px-4 py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors">
          Confirm
        </button>
      </div>
    </Modal>
  );
}

export const statusColor = (s) =>
  s === "Published" || s === "Active"
    ? "bg-green-50 text-green-700 border border-green-200"
    : "bg-amber-50 text-amber-700 border border-amber-200";
