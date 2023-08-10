import React, { useState } from "react";
import formatDate from "../formatDate";

function NewJob({ jobs, jobId }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const [postJob, setPostJob] = useState(false);

  const currentJobCard = jobs.find((job) => job.id === jobId);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };


  if (postJob) {
    return (
      <main
        id="content"
        role="main"
        className="w-full max-w-md mx-auto p-1 -mt-1"
      >
        <div className="bg-white rounded-xl border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h3 className="block text-xl font-bold text-gray-800">
                Fill this form to post a new job
              </h3>
            </div>

            <div>
              <form className="shadow-none">
                <div className="-mb-10">
                  <label
                    htmlFor="title"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  />
                </div>
                <div className="-mb-10">
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="location"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="py-2 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  >
                    <option value="nairobi">Nairobi</option>
                    <option value="2">Nakuru</option>
                    <option value="3">Mombasa</option>
                    <option value="4">Kisumu</option>
                    <option value="5">Nakuru</option>
                    <option value="1">Eldoret</option>
                    <option value="2">Kericho</option>
                    <option value="3">Mombasa</option>
                    <option value="4">Kisumu</option>
                    <option value="5">nakuru</option>
                  </select>
                </div>
                <div className="-mb-10">
                  <label
                    htmlFor="salary"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    required
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  />
                </div>
                <div className="-mb-10">
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="type"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Job Type
                  </label>
                  <select
                    id="type"
                    className="py-2 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  >
                    <option value="1">Full-Time</option>
                    <option value="2">Part-Time</option>
                    <option value="3">Remote</option>
                  </select>
                </div>
                <div className="-mb-10">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Experience
                  </label>
                  <textarea
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    id="experience"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="-mb-10">
                  <label
                    htmlFor="skills"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Skills
                  </label>
                  <textarea
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    id="skills"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setPostJob(false);
                    }}
                    className="py-2.5 px-3 w-32 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    if (currentJobCard) {
      return (
        <>
          <button
            onClick={() => {
              setPostJob(true);
            }}
            className="bg-indigo-500 px-7 py-2 ml-30 rounded-md text-md text-white font-semibold"
          >
            Click here to post a new job
          </button>

          <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                {formatDate(currentJobCard.posted)}
              </span>
              <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                {currentJobCard.type.charAt(0).toUpperCase() +
                  currentJobCard.type.slice(1).toLowerCase()}
              </a>
            </div>
            <div className="mt-2">
              <a href="#" className="text-2xl font-bold text-gray-900 ">
                {currentJobCard.title}
              </a>
              <p className="mt-2 text-gray-600 font-bold">
                {currentJobCard.location}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
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
                  {currentJobCard.company}
                </a>
              </div>
            </div>
            <div className="card mt-4 p-3">
              <h3 className="font-bold mb-3 pt-2">Skills</h3>
              <p className="mb-1">{currentJobCard.skills}</p>
            </div>
            <div className="card mt-4 p-3">
              <h3 className="font-bold mb-3 pt-2">Job Details</h3>
              <p className="mb-6">
                {currentJobCard.details
                  .trim()
                  .split(/\s+/)
                  .slice(0, 80)
                  .join(" ")}
                {isShowMore && (
                  <span>
                    {currentJobCard.details
                      .trim()
                      .split(/\s+/)
                      .slice(80)
                      .join(" ")}
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
        </>
      );
    }

    return (
      <>
        <button
          onClick={() => {
            setPostJob(true);
          }}
          className="bg-indigo-500 px-7 py-2 ml-30 rounded-md text-md text-white font-semibold"
        >
          Click here to post a new job
        </button>

        <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              January 30, 2023
            </span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
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
          <div className="card mt-4 p-3">
            <h3 className="font-bold mb-3 pt-2">Skills</h3>
            <p className="mb-1">react, js, html, css, scrum</p>
          </div>
          <div className="card mt-4 p-3">
            <h3 className="font-bold mb-3 pt-2">Job Details</h3>
            <p className="mb-6">
              The company is seeking a Software Engineer with expertise in
              Guidewire GOSU to join their cross-functional team in the E&S
              insurance segment. The engineer will collaborate with various
              teams to enhance and maintain systems supporting business
              processes. Responsibilities include delivering solutions,
              implementing features, estimating tasks, conducting testing,
              debugging, and staying updated on software design best practices.
              {isShowMore && (
                <span>
                  The role involves active participation in an agile development
                  environment, effective communication with stakeholders, and
                  contributing to application support issue resolutions.
                  Qualifications include a Bachelor's degree or equivalent
                  experience, critical thinking, problem-solving, and
                  time-management skills. The candidate should be a team player
                  with excellent interpersonal and communication skills,
                  self-motivated, and have at least 1+ years of experience in
                  Guidewire Policy Center development using GOSU or Java.
                  Familiarity with Guidewire Studio and Configuration, Agile
                  software development practices, XML, XSLT, XSD, and automated
                  testing (e.g., Selenium) is beneficial. The company does not
                  accept unsolicited resumes from external recruiting agencies
                  or firms.
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
      </>
    );
  }
}

export default NewJob;
