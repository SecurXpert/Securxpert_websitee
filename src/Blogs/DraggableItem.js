import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { GripVertical, Trash2, Edit } from 'lucide-react';

export function DraggableItem({
  id,
  index,
  title,
  description,
  onMove,
  onDelete,
  onEdit
}) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'ITEM',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (item) => {
      if (item.index !== index) {
        onMove(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => preview(drop(node))}
      className={`bg-white border border-[#e2e8f0] rounded-lg p-4 transition-all ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          ref={drag}
          type="button"
          className="mt-1 cursor-grab active:cursor-grabbing text-[#94a3b8] hover:text-[#64748b]"
        >
          <GripVertical className="w-5 h-5" />
        </button>

        <div className="flex-1">
          <h4 className="font-medium text-[#1e293b]">{title}</h4>
          {description && <p className="text-sm text-[#64748b] mt-1">{description}</p>}
        </div>

        <div className="flex items-center gap-2">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(id)}
              className="p-1.5 text-[#64748b] hover:text-[#5A73FF] hover:bg-[#F8FAFC] rounded transition-colors"
            >
              <Edit className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="p-1.5 text-[#64748b] hover:text-[#ef4444] hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
