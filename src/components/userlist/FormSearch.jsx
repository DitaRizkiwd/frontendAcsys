import React from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'

const FormSearch = () => {
  return (
    <div className="flex justify-between items-center">
    <button className="bg-blue-500 flex items-center gap-2 py-2 px-3 rounded-xl text-white">
      <FiPlus size={20} />
      <p >Add</p>
    </button>
      <form className="flex items-center border border-gray-400 rounded-xl">
        <input
          type="text"
          placeholder="Search Parameter"
          className="text-end 
          outline-none rounded-l-xl py-1 px-3 bg-transparent"
        />
      <button className="bg-blue-500 p-2 h-full rounded-r-xl ">
        <FiSearch size={20} color="white" />
      </button>
      </form>
  </div>
  )
}

export default FormSearch