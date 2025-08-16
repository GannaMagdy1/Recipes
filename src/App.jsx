import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'

import RecipeDetails from './Components/RecipeDetails/RecipeDetails'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Projects from './Components/SideBar/SideBar'
import MealCategory from './Components/MealCategory/MealCategory';


function App() {
 let router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "recipeDetails/:id", element: <RecipeDetails /> },
        {path: "category/:categoryName" , element:<MealCategory />},
        {path:'projects', element: <Projects/> , children:[
    { index: true, element: <Home /> },
             { path: "meals", element: <h1>meals</h1> },
          { path: "ingredients", element: <h1>ingredients</h1> },
          { path: "areas", element: <h1> areas</h1> },
       
        ]}
      ]
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App
