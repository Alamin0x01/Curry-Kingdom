import React, { useState } from "react";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { id, details, name, rating, ingredients, photo, cookingMethod } =
    recipe;
  const handleFavourite = () => {
    toast.success("Added to favourite!");
    setIsDisabled(true);
  };
  return (
    <>
      <div className="card card-compact w-full bg-base-100 overflow-hidden shadow-xl">
        <figure>
          <img className="h-80 w-full object-cover" src={photo} alt="recipe" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{details}</p>
          
          <div >
            <div>
              <h3 className="font-bold text-xl my-4">Ingredients:</h3>
              {ingredients ? (
                <>
                  {ingredients.map((i) => (
                    <p>{i}</p>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
            <p>
              <span className="text-xl font-bold">Cooking Methode:</span>
              {cookingMethod}
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

      {/* <div className="card lg:card-side bg-base-100 shadow-xl my-5 w-11/12 mx-auto">
      <figure className="w-6/12">
        <img src={photo} alt="recipe" />
      </figure>
      <div className="card-body w-6/12">
        <h2 className="card-title text-2xl">{name}</h2>
        <div>
          <h3 className="font-bold text-xl my-4">Ingredients:</h3>
          {ingredients ? (
            <>
              
              {ingredients.map((i) => (
                <p>{i}</p>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
        <p>
          <span className="text-xl font-bold">Cooking Methode:</span>
          {cookingMethod}
        </p>

        <div className="card-actions justify-end">
          <div className="mr-auto flex items-center mt-5">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </div>
          <button
            onClick={handleFavourite}
            disabled={isDisabled}
            className="btn btn-primary"
          >
            Favourite
          </button>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default RecipeCard;
