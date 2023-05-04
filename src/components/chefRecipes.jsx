import React from "react";
import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/solid";
const chefRecipes = (props) => {
  const {
    name,
    picture,
    bio,
    num_recipes,
    recipes,
    recipes1,
    recipes2,
    recipes_,
    recipes1_pic,
    recipes2_pic1,
    experience_years,
    likes,
  } = props.job;

  const handleAddToCart = props.handleAddToCart;
  return (
    <div className=" px-20 py-5">
      <div className="card lg:card-side bg-base-100 ">
        <figure>
          <img src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <li>{bio}</li>

          <li>Experience Year: {experience_years}</li>
          <li>Recipes: {num_recipes}</li>
          <li>Likes: {likes}</li>
          <li>{recipes}</li>
        </div>
      </div>
      <h1 className="text-center  mb-12 text-2xl font-bold">Top 3 Recipes</h1>
      <div className="grid grid-col-3 grid-flow-col gap-4 mb-60">
        <div className="card  w-96 h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recipes_} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes}</h2>

            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(props.job)}
                className=" btn-outline btn-secondary"
              >
                <StarIcon className="h-10 w-20" />
              </button>
            </div>
          </div>
        </div>
        <div className="card  w-96 h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recipes1_pic} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes1}</h2>

            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(props.job)}
                className=" btn-outline btn-secondary"
              >
                <StarIcon className="h-10 w-20" />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recipes2_pic1} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipes2}</h2>

            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(props.job)}
                className=" btn-outline btn-secondary"
              >
                <StarIcon className="h-10 w-20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chefRecipes;
