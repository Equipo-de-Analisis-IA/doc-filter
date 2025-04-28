import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertDoc() {
  const [format, setFormat] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/documents");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-gray-400 p-4">
      <div className="flex items-center space-x-10">
        {/* Carpeta inicial */}
        <img src="/folder-icon.png" alt="Carpeta" className="w-24 h-24" />

        {/* Flecha */}
        <div className="text-green-500 text-6xl">→</div>

        {/* Carpeta lista */}
        <div className="flex flex-col items-center">
          <img src="/folder-filled-icon.png" alt="Carpeta Llena" className="w-24 h-24" />
          <p className="font-bold mt-2">ESTA LISTO TU SELECCIÓN</p>
        </div>
      </div>

      {/* Selección de formato */}
      <div className="mt-8 flex flex-col items-center">
        <div className="bg-gray-300 rounded-full px-6 py-2 font-semibold mb-4">
          SELECCIONA EL FORMATO DESEADO
        </div>
        <div className="space-y-4">
          <button
            onClick={() => setFormat("PDF")}
            className={`flex items-center space-x-4 px-6 py-2 rounded-full ${format === "PDF" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            <span>PDF</span>
          </button>
          <button
            onClick={() => setFormat("WORD")}
            className={`flex items-center space-x-4 px-6 py-2 rounded-full ${format === "WORD" ? "bg-black text-white" : "bg-gray-300"}`}
          >
            <span>WORD</span>
          </button>
        </div>
      </div>

      {/* Botón continuar */}
      <div className="mt-8">
        <button 
          onClick={handleContinue}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold px-8 py-4 rounded-full transition-all"
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}