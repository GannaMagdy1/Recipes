import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const RecipeDetails = () => {

  const [recipeDetails, setRecipeDetails] = useState([])
  const { id } = useParams();
  console.log(id);

  const getRecipeDetails = async (id) => {
    try {
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(data.data.meals);
      setRecipeDetails(data.data.meals)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    if (id) getRecipeDetails(id);
  }, [id]);

  return (
    <>

      <main className=''>

        <div className='' >
          <div className='mealImage '>
            {recipeDetails.map(recipe => <div className=' bg-[#F4F2EE]  text-center grid grid-cols-1 md:grid-cols-3 gap-5 p-8 '>

              <div className=''>
                <h2 className='py-2 text-left text-5xl font-bold'>{recipe.strMeal}</h2>
                <div className=' py-2flex items-center justify-center '>
                  <img className='rounded-3xl w-2/3  ' src={recipe.strMealThumb} alt="" />
                </div>

                <Link to={`${recipe.strYoutube}`} className=''>
                  <button className=" my-10 cursor-pointer bg-red-600 text-white font-bold py-2 px-4 rounded-md">
                    <i className="text-white fa-brands fa-youtube"></i> Youtube
                  </button>
                </Link>


                <Link to={'/'} className=''>
                  <button className=" ms-10 my-10 bg-green-600 text-white font-bold py-2 px-4 rounded-md">
                    <i className="text-white fa-solid fa-globe"></i> <a href="">Source</a>
                  </button>
                </Link>
              </div>

              <div className=' instructions'>

                <p>{recipe.strInstructions}</p>
              </div>

              <div className=' ingridents  bg-white  rounded-3xl '>

                {recipeDetails[0] && (
                  <div className="mt-6">
                    <h3 className=" ps-10 text-2xl  font-semibold mb-4">Ingredients</h3>

                    {Array.from({ length: 20 }).map((_, i) => {
                      const ingredient = recipeDetails[0][`strIngredient${i + 1}`];
                      const measure = recipeDetails[0][`strMeasure${i + 1}`];

                      if (ingredient && ingredient.trim() !== "") {
                        return (
                          <div key={i} className="mb-2">
                            <p className="text-lg font-medium">
                              {ingredient}: <span className="ps-10 text-gray-700">{measure}</span>
                            </p>
                            <hr className="my-2 border-gray-300" />
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                )}

              </div>

            </div>)}
          </div>
          
        </div>
      </main>
    </>
  )
}

export default RecipeDetails