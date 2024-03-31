import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/SideBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="min-h-[100vh] bg-white flex">
      <div className='relative'><Sidebar/></div>
      <div className="w-full relative pb-10">
        <NavBar/>
        <Header/>
        <div className=" px-10 ">
          <div className="">{children}</div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default layout