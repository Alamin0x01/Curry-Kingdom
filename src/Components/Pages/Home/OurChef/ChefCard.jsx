import React, { createContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const { id, name, picture, experience_years, num_recipes, likes } = chef;
  return (
    <div className="bg-base-100">
      <div className="card glass w-96 mx-auto bg-cyan-100 shadow-xl">
        <figure>
          <LazyLoad
            className="LazyLoad"
            width={400}
            height={200}
            offset={300}
            threshold={0.75}
          >
            <img className="h-58" src={picture} alt="Chef" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Experience: <span>{experience_years}</span>
          </p>
          <p>
            Number of Recipes: <span>{num_recipes}</span>
          </p>

          <div className="card-actions justify-between items-center">
            <div className="badge h-10 badge-outline badge-info gap-2">
              <FaHeart className="text-red-600 text-3xl"></FaHeart>
              <span className="font-bold">{likes}</span>
            </div>
            <Link to={`/chefRecipes/${id}`}>
              <button className="btn btn-outline btn-info">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
