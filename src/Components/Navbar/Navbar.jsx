import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
              <nav className='nav'>
                 <div className=' bg-[#F4F2EE] p-10'>
                <h1 className=' p-2 text-left text-amber-600 font-bold  text-4xl'>Learn, Cook, Eat Your Food</h1>

                <div className='py-1'>
                    <div  className=' py-5 text-center grid grid-cols-8 gap-3 p-2'>
                        <NavLink to={`/`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-16 py-2 px-4  rounded-3xl">ALL</NavLink>
                        <NavLink to={`/category/Beef`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-24 py-2 px-4  rounded-3xl">Beef</NavLink>
                        <NavLink to={`/category/Breakfast`}  className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-24 py-2 px-4  rounded-3xl">Breakfast</NavLink>
                        <NavLink to={`/category/Chicken`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-20 py-2 px-4  rounded-3xl">Chicken</NavLink>
                        <NavLink to={`/category/Dessert`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-28 py-2 px-4  rounded-3xl">Dessert</NavLink>
                        <NavLink to={`/category/Goat`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-20 py-2 px-4  rounded-3xl">Goat</NavLink>
                        <NavLink to={`/category/Lamb`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-20 py-2 px-4  rounded-3xl">Lamb</NavLink>
                        <NavLink to={`/category/Miscellaneous`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-32 py-2 px-4  rounded-3xl">Miscellaneous</NavLink>
                        <NavLink to={`/category/Pasta`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-28 py-2 px-4  rounded-3xl">Pasta</NavLink>
                        <NavLink to={`/category/Pork`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-20 py-2 px-4  rounded-3xl">Pork</NavLink>
                        <NavLink to={`/category/Seafood`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-28 py-2 px-4  rounded-3xl">Seafood</NavLink>
                        <NavLink to={`/category/Side`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-20 py-2 px-4  rounded-3xl">Side</NavLink>
                        <NavLink to={`/category/Starter`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-28 py-2 px-4  rounded-3xl">Starter</NavLink>
                        <NavLink to={`/category/Vegan`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-28 py-2 px-4  rounded-3xl">Vegan</NavLink>
                        <NavLink to={`/category/Vegetarian`} className="bg-[#eae8e4] border-2 border-stone-400 hover:bg-white hover:scale-110 transition-all text-black font-bold w-40 py-2 px-4  rounded-3xl">Vegetarian</NavLink>
                    </div>
                </div>

                <hr className='' />
            </div>
             </nav>
        </>
             
    );
}

export default Navbar;


          
      