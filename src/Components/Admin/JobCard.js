import React from "react";

function JobCard({ job, onButtonClick, onDeleteJob }) {
  function handleJobDetails(id) {
    onButtonClick(id);
  }

  // CRUD OPERATIONS
  // DELETE

  function handleDeleteClick () {
    fetch(`http://localhost:3000/employers/${job.id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onDeleteJob(job)) //callback fn to pass job prop to parent component; Admin.
  }


  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full p-1">
            <a
              className="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
            >
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-lg">{job.company}</p>
                  <p className="text-lg">{job.location}</p>

                  <div className="mt-3">
                    <button
                      type="button"
                      className="bg-cyan-200 border mr-3 px-2 py-1.5 rounded-lg"
                    >
                      <i className="fa-regular fa-clock"></i>{" "}
                      {job.type.charAt(0).toUpperCase() +
                        job.type.slice(1).toLowerCase()}
                    </button>
                    <button
                      type="button"
                      className="bg-green-100 border mr-3 px-2.5 py-1.5 rounded-lg"
                    >
                      {" "}
                      <i className="fa fa-money-bills"></i> $
                      {job.salary.toLocaleString()} per year
                    </button>
                    <button
                      type="button"
                      className="text-gray-900 border bg-orange-100 px-2 py-1.5 rounded-lg"
                    >
                      {" "}
                      <i className="fa fa-user-gear"></i> {job.experience}+
                      years
                    </button>
                  </div>
                </div>

                <div className="w-auto p-2">
                    <div className="grid justify-items-end mt-6">
                      <button
                        className="inline-block  w-40 px-4 py-2 text-white font-semibold tracking-tight bg-blue-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleJobDetails(job.id); }}
                      >
                        View Details
                      </button>
                      <button
                        className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-green-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                        href="#"
                      >
                        Edit
                      </button>
                      <button
                        className="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-red-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                        href="#"
                        onClick={handleDeleteClick}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                <p className="pt-4">{job.description}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
