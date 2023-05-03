import React from "react";
import { Link } from "react-router-dom";
// import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const chefBioCards = ({ job }) => {
  const { id, name, picture, num_recipes, experience_years, likes } = job;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="object-contain h-48 w-45" src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Experience Year: {experience_years}</p>
          <p>Recipes: {num_recipes}</p>
          <p>Likes: {likes}</p>

          {/* <p>All recipe</p> */}

          {/* <ArrowRightCircleIcon className="h-10 w-10" /> */}

          <Link to={`/jobdetails/${id}`}>
            <button className="btn btn-primary">All recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default chefBioCards;
