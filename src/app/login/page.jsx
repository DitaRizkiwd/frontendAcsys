"use client";
import React from "react";

import { FiLock, FiUser } from "react-icons/fi";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Login = () => {
  return (
    <div className=" bg-gray-300 min-h-[100vh] flex justify-center text-white">
      <div className="w-[680px] h-[604px] flex flex-col items-center -mt-5">
        <div className="w-[300px] ">
          <Image src={logo} alt="Acsys"></Image>
        </div>
        <div className="w-[420px] h-[504px] bg-white rounded-2xl -mt-5 shadow-lg p-8">
          <div className="bg-blue-600 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <FiUser size={20}/>
                <p className="font-semibold">Username or Email</p>
              </div>
              <form>
                <input type="input" placeholder="Username" className="py-2 px-4 rounded-lg w-full text-black" />
              </form>
          </div>
          <div className="bg-blue-600 p-6 rounded-xl mt-5">
              <div className="flex items-center gap-2 mb-3">
              <FiLock size={20}/>
                <p className="font-semibold">Password</p>
              </div>
              <form>
                <input type="password" placeholder="Password" className="py-2 px-4 rounded-lg w-full text-black" />
              </form>
          </div>
          <div className="bg-gray-500 mt-5 rounded-xl p-8 flex items-center gap-3">
            <form>
              <input type="checkbox" className="w-5 h-5 rounded-xl"></input>
            </form>
              <p className="-mt-[6px]">I accept the terms in the user agreement</p>
          </div>
        </div>
        <Link href="/main">
          <button className="bg-blue-600 mt-5 w-[380px] py-2 rounded-xl font-semibold">Sign In</button>
        </Link>
       
      </div>
      {/* <div className="bg-white p-8 rounded shadow-md w-96">
          <form>
            <div className="mb-4 bg-blue-500 p-6 rounded-xl">
              <div className='flex items-center mb-3'>
                <MdOutlinePersonOutline size={20} color='white' />
                <label htmlFor="email" className="text-white pl-1">Username or Email</label>
              </div>
              <input type="email" id="email" placeholder='username' className="w-full rounded-md p-1" />
            </div>
            <div className="mb-4 bg-blue-500 p-6 rounded-xl">
              <div className='flex items-center mb-3'>
                <IoMdLock size={20} color='white'/>
                <label htmlFor="password" className="text-white">Password</label>
              </div>
              <input type="password" id="password" placeholder='password'className="w-full rounded-md p-1" />
            </div>

            <div className="mb-4 bg-gray-500 p-6 rounded-xl">
              <div className='flex items-center justify-around mb-3'>
              <input type="checkbox" className="w-full rounded-md p-1" />
              <label htmlFor="checkbox" className="text-white">I accept the terms in the user agreement</label>
              </div>
            </div>
            
            
          </form>
        </div>
          <button type="submit" className="w-96 bg-blue-500 text-white rounded-md py-2 mt-2">Login</button> */}
    </div>
  );
};

export default Login;
