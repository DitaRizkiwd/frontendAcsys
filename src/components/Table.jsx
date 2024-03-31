import React from 'react'
import { FiEdit, FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";

const Table = ({headers, data}) => {
    // const data = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {/* <div className="flex justify-between items-center">
        <button className="bg-blue-600 flex items-center gap-2 py-2 px-3 rounded-xl text-white">
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
      </div> */}
      <div className="w-full">
        <table className='w-full text-center border'>
          <thead>
            <tr className="border border-b-2 bg-blue-300">
            {headers.map((item,index)=>(
              <th key={index} className="px-4 py-2">{item}</th>
            ) )}
            <th className="px-4 py-2">Action</th>
            </tr>
          
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`${index%2==0?"bg-white":"bg-blue-100"} hover:bg-gray-100`}>
                {headers.map((head,index)=>(
                    <td key={index} className="py-2 px-4"> value {item}</td>
                ))}

                <td className="py-2 px-4 flex items-center justify-center gap-3">
                  <button className='text-red-500'>
                    <FiTrash2 />
                  </button>
                  <button className='text-yellow-600'>
                    <FiEdit  />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table