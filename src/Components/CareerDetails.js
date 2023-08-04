import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../data/DataContextProvider";
import Card from "./Card";
import Careers from "./Careers";
import RenderJobOnLoad from "./RenderJobOnLoad";
import Apply from "./Apply";

function CareerDetails({ careerData, careerId }) {
  const { isLoading } = useContext(dataContext);
  const currentCareerDetail = careerData.find(
    (Career) => Career.id === careerId
  );

  const [isShowMore, setIsShowMore] = useState(false);
  const [isApply, setIsApply] = useState(false);

  const toggleApply = () => {
    setIsApply(!isApply);
  };

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  if (!currentCareerDetail) {
    return isLoading ? <h1>Loading....</h1> : <RenderJobOnLoad />;
  }
  return (
    <div>
      {!currentCareerDetail ? (
        <h1>LOADING...</h1>
      ) : (
        <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-900">
              {currentCareerDetail.posted}
            </span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              {currentCareerDetail.type.charAt(0).toUpperCase() +
                currentCareerDetail.type.slice(1).toLowerCase()}
            </a>
          </div>
          <div className="mt-2">
            <a href="#" className="text-2xl font-bold text-gray-900 ">
              {currentCareerDetail.title}
            </a>
            <p className="mt-2 text-gray-600 font-bold">
              {currentCareerDetail.location}
            </p>
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
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Save
            </button>

            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more ⟶
            </a>
            <div className="flex items-center">
              <img
                src="https://stackdiary.com/140x100.png"
                alt="Author Photo"
                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              />
              <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-700">
                {currentCareerDetail.company}
              </a>
            </div>
          </div>
          <div className="card mt-4 p-3">
            <h3 className="font-bold mb-3 pt-2">Skills</h3>
            <p className="mb-1">{currentCareerDetail.skills}</p>
          </div>
          {isApply && (
            <>
              <Apply />
            </>
          )}

          <div className="card mt-4 p-3">
            <h3 className="font-bold mb-3 pt-2">Job Details</h3>
            <p className="mb-6">
              {currentCareerDetail.details
                .trim()
                .split(/\s+/)
                .slice(0, 80)
                .join(" ")}
              {isShowMore && (
                <span>
                  {currentCareerDetail.details
                    .trim()
                    .split(/\s+/)
                    .slice(80)
                    .join(" ")}
                </span>
              )}
            </p>

            <button
              class="text-blue-600 dark:text-blue-400 hover:underline"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerDetails;
