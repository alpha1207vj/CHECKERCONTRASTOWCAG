// savecolors.tsx
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { X, Trash2 } from "lucide-react";

type Palette = {
  id: string;
  fg: string;
  bg: string;
  savedAt: string;
};

export default function SaveColors({
  isOpen,
  onClose,
  color,
  color1,
  onColorChange,onColorChange1
}: {
  isOpen: boolean;
  onClose: () => void;
  color: string;
  color1: string;
  onColorChange : any;
  onColorChange1 : any
}) {
  const HandleSaveColorUse = (value: any,value1:any) => 
  {
    onColorChange(value);
    onColorChange1(value1);
  }
  const [palettes, setPalettes] = useState<Palette[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("saved-palettes");
    if (stored) setPalettes(JSON.parse(stored));
  }, [isOpen]); // reload when opened

  const saveCurrent = () => {
   const alreadyExists = palettes.some(
    (p) => p.fg === color && p.bg === color1
  );
  if (alreadyExists) return;

  const newPalette: Palette = {
    id: crypto.randomUUID(),
    fg: color,
    bg: color1,
    savedAt: new Date().toLocaleDateString(),
  };
  const updated = [newPalette, ...palettes];
  setPalettes(updated);
  localStorage.setItem("saved-palettes", JSON.stringify(updated));
  };

  const deletePalette = (id: string) => {
    const updated = palettes.filter((p) => p.id !== id);
    setPalettes(updated);
    localStorage.setItem("saved-palettes", JSON.stringify(updated));
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm p-5 bg-white shadow-2xl rounded-t-2xl md:rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold">Saved Palettes</h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Save current */}
        <button
          onClick={saveCurrent}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 mb-4 text-sm font-semibold transition-colors border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400"
        >
          <div
            className="w-4 h-4 border border-gray-200 rounded-full"
            style={{ background: color }}
          />
          <div
            className="w-4 h-4 border border-gray-200 rounded-full"
            style={{ background: color1 }}
          />
          Save current palette
        </button>

        {/* List */}
        <div className="flex flex-col gap-2 overflow-y-auto max-h-64">
          {palettes.length === 0 && (
            <p className="py-6 text-sm text-center text-gray-400">
              No saved palettes yet
            </p>
          )}
          {palettes.map((p) => (
            <div 
              onClick={() => { HandleSaveColorUse(p.fg, p.bg) }}
              key={p.id}
              
              className="flex items-center justify-between p-2 px-2 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div
                    className="w-6 h-6 border border-gray-200 rounded-l-full"
                    style={{ background: p.fg }}
                  />
                  <div
                    className="w-6 h-6 border border-gray-200 rounded-r-full"
                    style={{ background: p.bg }}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  <p className="font-mono">{p.fg}</p>
                  <p className="font-mono">{p.bg}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">{p.savedAt}</span>
                <button
                  onClick={() => deletePalette(p.id)}
                  className="p-2 transition-colors rounded-full md:hover:text-red-300"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}