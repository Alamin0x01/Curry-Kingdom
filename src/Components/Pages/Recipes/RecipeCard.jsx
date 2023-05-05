import React, { useState } from "react";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    id,
    name,
    picture,
    experience_years,
    num_recipes,
    likes,
    rating,
    bio,
  } = recipe;
  const handleFavourite = () => {
    toast.success("Added to favourite!");
    setIsDisabled(true);
  };
  return (
    <>
      <div className="card card-compact w-full bg-base-100 overflow-hidden shadow-xl">
        <figure>
          <img
            className="h-80 w-full object-cover"
            src={picture}
            alt="recipe"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{experience_years}</p>

          <div>
            <div>
              <h3 className="font-bold text-xl my-4">Ingredients:</h3>
            </div>
            <p>
              <span className="text-xl font-bold">Cooking Methode:</span>
              {num_recipes}
            </p>
          </div>

          <div className="card-actions justify-end mt-5">
            <button
              onClick={handleFavourite}
              disabled={isDisabled}
              className="btn btn-primary"
            >
              Favourite
            </button>
            <div className="mr-auto flex items-center my-auto">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              ></Rating>
              {rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
