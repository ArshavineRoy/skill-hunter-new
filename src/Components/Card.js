import React from "react";
import { Link } from "react-router-dom";

function Card({ career, onButtonClick }) {
  function detailsHandle(id) {
    // console.log(id);
    onButtonClick(id);
  }
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-wrap ">
        <div className="w-full p-1" onClick={() => detailsHandle(career.id)}>
          <a
            className="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
            href="#"
          >
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-auto p-2">
                <h3 className="mb-1 font-semibold tracking-tight">
                  {career.title}
                </h3>
                <p className="text-lg">{career.company}</p>
                <p className="text-lg">{career.location}</p>

                <div className="mt-3">
                  <button type="button" className="bg-cyan-200 border mr-3 px-2 py-1.5 rounded-lg">
                    <i class="fa-regular fa-clock"></i>{" "}
                    {career.type.charAt(0).toUpperCase() +
                      career.type.slice(1).toLowerCase()}
                  </button>
                  <button type="button" className="bg-green-100 border mr-3 px-2.5 py-1.5 rounded-lg">
                    {" "}
                    <i class="fa fa-money-bills"></i> $
                    {career.salary.toLocaleString()} per year
                  </button>
                  <button
                    type="button"
                    className="text-gray-900 border bg-orange-100 px-2 py-1.5 rounded-lg"
                  >
                    {" "}
                    <i class="fa fa-user-gear"></i> {career.experience}+ years
                  </button>
                </div>
              </div>

              <div className="w-auto p-2">
                <div className="flex flex-row items-center justify-center">
                  <Link
                    to="/"
                    onClick={() => detailsHandle(career.id)}
                    className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <p className="pt-4">{career.description}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
