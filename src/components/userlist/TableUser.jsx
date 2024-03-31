"use client";
import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TableUser = () => {
  const data = Array.from({ length: 25 }, (_, index) => index + 1);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(10);

  const paginateData = () => {
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    return data.slice(firstIndex, lastIndex);
  };

  return (
    <div>
      <table className="w-full text-center">
        <thead>
          <tr className="border border-b-2 bg-blue-300">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Creates at</th>
            <th className="px-4 py-2">Updated at</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginateData(data).map((item, index) => (
            <tr
              key={index}
              className={` ${index % 2 == 0 ? "bg-white" : "bg-blue-100"} hover:bg-gray-100`}
            >
              <td className="py-2 px-4">{item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4">value {item}</td>
              <td className="py-2 px-4 flex items-center justify-center gap-3">
                <button>
                  <FiTrash2 color="red" />
                </button>
                <button>
                  <FiEdit color="yellow" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 flex justify-center items-center gap-3">
        
        <button 
        disabled={currentPage===1}
        onClick={()=>setCurrentPage(currentPage-1)} className="py-2 px-4 rounded-xl bg-blue-500 text-white">
          Prev
        </button>
        <h5 className="font-semibold">{currentPage}</h5>
        <button
        disabled={currentPage===Math.ceil(data.length/perPage)}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="py-2 px-4 rounded-xl bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableUser;
