import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../../logo-BfNap0Pe.png';



const Projects = () => {
  return (
    <>
      <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

<div>
  <img src={logo} alt="" />
</div>

          <ul className="space-y-2 font-medium">
            <li className=' rounded-lg  bg-amber-600  hover:scale-105 transition-all duration-500 hover:shadow-white  shadow-2xl'>
              <NavLink to={'/'} href="#" className="  flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">

                <span className="  flex-1 ms-3 whitespace-nowrap text-white  text-2xl"> <i className=" me-3 fa-solid fa-utensils" />Meals</span>
              </NavLink>
            </li>
            <li className='border-gray-400  border-2 rounded-lg  hover:scale-105 transition-all duration-500 hover:shadow-white  shadow-2xl'>
              <NavLink to={'/'} href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                <span className="flex-1 ms-3 whitespace-nowrap  text-xl"> <i className="me-3 fa-solid fa-utensils" />Ingridents</span>
              </NavLink>
            </li>
            <li className='border-gray-400  border-2 rounded-lg  hover:scale-105 transition-all duration-500 hover:shadow-white  shadow-2xl'>
              <NavLink to={'/'} href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                <span className="flex-1 ms-3 whitespace-nowrap  text-xl"> <i className="me-3 fa-solid fa-utensils" />Areas</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>


<div className=" sm:ml-64">
  <div className="">
    <Outlet />
  </div>
</div>

    </>
  )
}

export default Projects