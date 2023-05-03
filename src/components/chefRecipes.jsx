import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
const chefRecipes = (props) => {
  const { id, name, picture, num_recipes, experience_years, likes } = props.job;

  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="grid lg:grid-cols-4 mb-20">
      <div className="pt-8 col-span-3 px-4">
        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Job Description:</span> {name}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Job Responsibility:</span>{" "}
            {name}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">
              Educational Requirements:
            </span>{" "}
            {name}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Experiences:</span>{" "}
            {experience_years}
          </h1>
        </div>
      </div>
      <div className="col-span-1 rounded-md bg-violet-200 mt-8">
        <h1 className="pl-4 pt-4 text-3xl font-bold pb-2">Job Details</h1>
        <hr />

        <div className="py-8">
          <span className="flex gap-3 pb-4 pl-4">
            <CurrencyDollarIcon className="h-8 w-8 text-violet-400" />{" "}
            <p className="text-2xl">
              <span className="text-2xl font-bold">Salary</span>: {name}
            </p>
          </span>

          <span className="flex gap-3 pb-4 pl-4">
            {" "}
            <p className="text-xl">
              <span className="text-2xl font-bold">Job Title:</span> {name}
            </p>
          </span>
        </div>
        <button
          onClick={() => handleAddToCart(props.job)}
          className="btn btn-primary w-[64%] block ml-9 mb-5"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default chefRecipes;
