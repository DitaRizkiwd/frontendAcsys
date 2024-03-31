import React from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

const FormSearch = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl ml-3">Data Pencarian</h3>

      <div className="flex justify-between items-center mt-3">
        <form className="flex items-center border border-gray-400 rounded-xl max-w-72">
          <input
            type="text"
            placeholder="Search Parameter"
            className="text-end 
          outline-none rounded-l-xl py-1 px-3 bg-transparent w-full"
          />
          <button className="bg-blue-500 p-2 h-full rounded-r-xl ">
            <FiSearch size={20} color="white" />
          </button>
        </form>
        <button className="bg-blue-500 flex items-center gap-2 py-2 px-3 rounded-xl text-white">
          <FiPlus size={20} />
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default FormSearch;
