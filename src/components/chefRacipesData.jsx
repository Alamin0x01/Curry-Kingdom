import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import JobDetailSection from "./chefRecipes";

const chefRacipesData = () => {
  const jobDetail = useLoaderData();
  let jobId = useParams();
  const [jobDetails, setJobDetail] = useState([]);

  useEffect(() => {
    let savedCart = [];
    const jobData = jobDetail.find((job) => job.id == jobId.id);
    if (jobData) {
      savedCart.push(jobData);
      setJobDetail(savedCart);
    }
  }, []);

  const handleAddToCart = (job) => {
    let newCart = [];
    const exist = jobDetails.find((jobs) => jobs.id === job.id);
    if (!exist) {
      job.quantity = 1;
      newCart = [...jobDetails, job];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = jobDetails.filter((jobs) => jobs.id !== job.id);
      newCart = [...remaining, exist];
      toast.success("WOW! Add Your Favourite Recipe", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setJobDetail(newCart);
  };
  return (
    <div>
      <div>
        {jobDetails.map((job) => (
          <JobDetailSection
            key={job.id}
            job={job}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default chefRacipesData;
