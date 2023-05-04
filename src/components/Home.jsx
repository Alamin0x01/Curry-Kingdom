import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedJobs from "./chefBioCards";

const Home = () => {
  const [ChefData, setChefData] = useState([]);
  const [data] = useState(false);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-snowy.vercel.app/chefData")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  const displayCard = data ? ChefData : ChefData.slice(0, 6);
  return (
    <div className="my-container">
      {/* <div className="flex flex-col items-center justify-between  lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
              One Step <br className="hidden md:block" /> Closer To Your{" "}
              <br className="hidden md:block" />
              <span className="inline-block text-purple-500">Dream Job</span>
            </h2>
            <p className="text-base text-gray-400 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className=" flex flex-col items-center md:flex-row">
            <Link to="/" className="btn  md:w-auto md:mr-4">
              <div className="inline-flex items-center  w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96"></div>
        </div>
      </div> */}

      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://dequeuniversity.com/assets/js/patterns/images/tempimage01.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}

      <div className=" text-center flex flex-col items-center">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Top Chef: World All-Stars
        </h1>
        <p className="text-gray-400 pt-3">
          To be a chef you have to be very meticulous in everything you do..
        </p>
      </div>
      <div className="my-container grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {displayCard.map((job) => (
          <FeaturedJobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
