import React from "react";
import Apply from "./Apply";
import { useState } from "react";

function RenderJobOnLoad() {
  const [isShowMore, setIsShowMore] = useState(false);

  const [isApply, setIsApply] = useState(false);

  const toggleApply = () => {
    setIsApply(!isApply);
  };

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          January 30, 2023
        </span>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer">
          Full-time
        </a>
      </div>
      <div className="mt-2">
        <a href="#" className="text-2xl font-bold text-gray-900 ">
          Senior Software Engineer
        </a>
        <p className="mt-2 text-gray-600 font-bold">Nairobi</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={toggleApply}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isApply ? "Close" : "Apply"}
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 "
        >
          <i className="fa-regular fa-bookmark text-lg"></i>
        </button>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more ⟶
        </a>
        <div className="flex items-center">
          <img
            src="/company.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          />
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-700">
            Amazon
          </a>
        </div>
      </div>

      {isApply && (
        <>
          <Apply toggleApply={toggleApply} />
        </>
      )}
      <div className="card mt-4 p-3">
        <h3 className="font-bold mb-3 pt-2">Skills</h3>
        <p className="mb-1">react, js, html, css, scrum</p>
      </div>

      <div className="card mt-4 p-3">
        <h3 className="font-bold mb-3 pt-2">Job Details</h3>
        <p className="mb-6">
          The company is seeking a Software Engineer with expertise in Guidewire
          GOSU to join their cross-functional team in the E&S insurance segment.
          The engineer will collaborate with various teams to enhance and
          maintain systems supporting business processes. Responsibilities
          include delivering solutions, implementing features, estimating tasks,
          conducting testing, debugging, and staying updated on software design
          best practices. The role involves active participation in an agile
          development environment, effective communication with stakeholders,
          and contributing to application support issue resolutions.
          Qualifications include a
          {isShowMore && (
            <span>
              Bachelor's degree or equivalent experience, critical thinking,
              problem-solving, and time-management skills. The candidate should
              be a team player with excellent interpersonal and communication
              skills, self-motivated, and have at least 1+ years of experience
              in Guidewire Policy Center development using GOSU or Java.
              Familiarity with Guidewire Studio and Configuration, Agile
              software development practices, XML, XSLT, XSD, and automated
              testing (e.g., Selenium) is beneficial. The company does not
              accept unsolicited resumes from external recruiting agencies or
              firms.
            </span>
          )}
        </p>

        <button
          className="text-blue-600 dark:text-blue-400 hover:underline"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default RenderJobOnLoad;
