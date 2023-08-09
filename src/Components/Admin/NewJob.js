import React, { useState } from "react";
import Apply from "../Apply";

function NewJob() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const [state, setState] = useState(false);
  if (state) {
    return (
      <main id="content" role="main" class="w-full  max-w-md mx-auto p-1">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800">Post a Job</h1>
            </div>

            <div class="mt-5">
              <form>
                <div class="grid gap-y-2">
                  <div>
                    <label
                      for="title"
                      class="block text-sm font-bold ml-1 mb-2"
                    >
                      Title
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="company"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Company
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="location"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Location
                    </label>
                    <div class="relative">
                      <select
                        id="location"
                        name="location"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
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
                  </div>
                  <div>
                    <label
                      for="salary"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Salary
                    </label>
                    <div class="relative">
                      <input
                        type="number"
                        id="salary"
                        name="salary"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="description"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Description
                    </label>
                    <div class="relative">
                      <textarea
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        id="description"
                        name="description"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>{" "}
                    </div>
                  </div>
                  <div>
                    <label
                      for="type"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Job Type
                    </label>
                    <div class="relative">
                      <select
                        id="type"
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      >
                        <option value="1">Full-Time</option>
                        <option value="2">Part-Time</option>
                        <option value="3">Remote</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Experience
                    </label>
                    <div class="relative">
                      <textarea
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>{" "}
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 "
                    >
                      Skills
                    </label>
                    <div class="relative">
                      <textarea
                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>{" "}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setState(false);
                      }}
                      class="py-3 px-4 w-32 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 "
                    >
                      <i class="fa-regular fa-bookmark text-lg"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setState(true);
          }}
          class="bg-indigo-500 px-7 py-2  mt-10 ml-56 rounded-md text-md text-white font-semibold"
        >
          Do you want to post a jobs?
        </button>

        <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              30/1/2023
            </span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              Full-time
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-900 "
            >
              Senior Software Engineer
            </a>
            <p className="mt-2 text-gray-600 font-bold">Nairobi</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 "
            >
              <i class="fa-regular fa-bookmark text-lg"></i>
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
              class="text-blue-600 dark:text-blue-400 hover:underline"
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
