import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  const [recipes, setRecipes] = useState([])

const getRecipe = async () => {
  try {
    const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    setRecipes(data.meals)
  } catch (error) {
    console.error("Error fetching meals:", error)
  }
}

  useEffect(() => {
    getRecipe()
  }, [])

  return (
    <>
      <Navbar />

      <main className='bg-[#F4F2EE] pt-6'>
        <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 p-8 '>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className='relative group px-3 pt-40 pb-10 bg-gray-50 rounded-3xl'>
              <div className='flex items-center justify-center mb-3'>
                <img
                  className='absolute -top-10 group-hover:rotate-360 transition-transform duration-500 rounded-full w-2/3'
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
              </div>
              <h5 className='my-1'>{recipe.strMeal}</h5>
              <p className=' text-green-800 mb-2'><i className=" text-green-800 fa-solid fa-earth-americas"></i>{recipe.strArea}</p>

              <Link to={`/recipeDetails/${recipe.idMeal}`}>
                <button className="cursor-pointer hover:scale-105 transition-all duration-500 my-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl">
                  View Recipe
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
