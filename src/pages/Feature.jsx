import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // icons (optional, from lucide-react)

export default function DropdownItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-blue-600 text-white px-4 py-3 rounded-lg shadow"
      >
        <span className="font-semibold">Click to Expand</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="mt-2 p-4 border border-blue-300 rounded-lg bg-blue-50 text-gray-700">
          <p>
            This is the dropdown content. You can put text, links, or any React
            components here.
          </p>
        </div>
      )}
    </div>
  );
}
