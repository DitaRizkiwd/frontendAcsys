import React from "react";
import { FiEdit,FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
import Table from "@/components/Table";
import FormSearch from "@/components/tablebank/FormSearch";

const page = () => {
  const headers=["Kode Bank","Nama Bank","Alias"]
  const data = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <div>
      <FormSearch/>
        <div className="w-full mt-5">
          <Table headers={headers} data={data} />
        </div>
    </div>
  )
}

export default page;
