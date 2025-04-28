import React, { useState } from "react";

export default function PrincipalDocs() {
  const [page, setPage] = useState(1);

  const documents = Array.from({ length: 12 }, (_, i) => ({
    name: `DOCUMENTO ${i + 1}`,
    format: "PDF",
  }));

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-400 to-gray-400 p-8">
      {/* Sidebar */}
      <div className="w-1/4 flex flex-col items-center bg-blue-200 rounded-lg p-4 mr-8">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
        <p className="text-center font-semibold mb-4">
          Anderson<br />Huamani Diego
        </p>
        <button className="bg-white px-4 py-2 rounded-full font-semibold mb-4 hover:bg-gray-200">
          Insertar Parámetros
        </button>
        <button className="bg-white px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
          Filtrar nuevos Documentos
        </button>
      </div>

      {/* Documentos */}
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">DOCUMENTOS</h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
          <table className="w-full">
            <thead>
              <tr className="bg-red-300 text-white">
                <th className="py-2">N°</th>
                <th className="py-2">NOMBRE</th>
                <th className="py-2">FORMATO</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2">{index + 1}°</td>
                  <td className="py-2">{doc.name}</td>
                  <td className="py-2">{doc.format}</td>
                  <td className="py-2">
                    <button className="bg-gray-300 px-4 py-1 rounded-full hover:bg-gray-400">
                      VER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex space-x-2 mt-4">
          <button onClick={() => setPage(Math.max(page - 1, 1))} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">{'<'}</button>
          {[1, 2, 3].map(num => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2 rounded ${page === num ? "bg-gray-400" : "bg-gray-300"} hover:bg-gray-400`}
            >
              {num}
            </button>
          ))}
          <button onClick={() => setPage(page + 1)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">{'>'}</button>
        </div>
      </div>
    </div>
  );
}