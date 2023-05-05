import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chef = useLoaderData();
  const chefRecipes = chef.recipes;

  return (
    <div>
      <div className="flex mt-10 ">
        <div className=" mask mask-squircle">
          <img
            className="w-full h-full object-cover"
            src={chef?.picture}
            alt="chef image"
          />
        </div>
        <div className="w-6/12 ml-2">
          <h2 className="text-5xl my-9 font-bold">{chef?.name}</h2>
          <p>
            <span className="font-bold">About : </span>
            {chef?.bio}
          </p>
          <li className="font-semibold mt-4">
            Recipes : <span className="font-bold">{chef?.num_recipes}</span>{" "}
          </li>
          <li className="font-semibold">
            Experience :
            <span className="font-bold"> {chef?.experience_years}</span> years
          </li>
        </div>
      </div>

      {/* <hr /> */}
      <div>
        <h2 className="font-bold text-4xl text-center my-10 ">
          My Top Recipes
        </h2>
        <div className="grid grid-cols-2 gap-10 mx-auto w-10/12">
          {/* {chefRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
