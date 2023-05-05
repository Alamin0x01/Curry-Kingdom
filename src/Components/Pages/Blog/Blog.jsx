import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [17, 11],
  };

  return (
    <div>
      <div className="mt-6 animate-bounce text-end mr-6">
        <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
          {({ toPdf }) => (
            <button className="btn btn-info " onClick={toPdf}>
              <FaDownload className="inline-block mr-2 text-white"></FaDownload>{" "}
              Download Pdf
            </button>
          )}
        </ReactToPdf>
      </div>
      <div ref={ref}>
        <div className="mt-5 mb-7 mx-10 text-sky-500 border-2 bg-blue-100  border-green-400 rounded p-5">
          <div>
            <h3 className="text-3xl font-semibold p-3">
              Q: Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Uncontrolled components are managed by the DOM, while
              controlled components are managed by React. Controlled components
              provide more control and can handle input validation and state
              changes.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: How to validate React props using PropTypes?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: In React, developers can use the PropTypes library to
              validate the type and shape of props passed to a component. To use
              PropTypes, import the library at the top of the file, and then
              define the PropTypes for each prop passed to the component using
              the propTypes object.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Node.js is a JavaScript runtime environment that enables
              developers to run JavaScript on the server-side, while Express.js
              is a web application framework built on top of Node.js, providing
              additional features for building web applications.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: What is a custom hook, and why will you create a custom hook??
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Custom hooks are reusable functions in React that allow
              developers to extract and share logic between components.
              Developers create custom hooks to reduce code duplication and
              improve code readability and maintainability.
            </p>
          </div>
        </div>
      </div>
      <div class=" bg-white flex space-x-12 p-12 justify-center items-center">
        <div class="  rounded-md p-4  w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-blue-400 h-12 w-12"></div>
            <div class="flex-1 space-y-4 py-1">
              <div class="h-4 bg-blue-400 rounded w-3/4"></div>
              <div class="space-y-2">
                <div class="h-4 bg-blue-400 rounded"></div>
                <div class="h-4 bg-blue-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
