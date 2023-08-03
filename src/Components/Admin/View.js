import React from 'react'


function View({jobs}) {

   

    const displayCareerdata=  jobs.map((career)=>{
    
        return (
        <>
    
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-wrap ">
            <div class="w-full p-1">
              <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <h3 class="mb-1 font-semibold tracking-tight">{career.title}</h3>
                    <p className="text-lg">{career.company}</p>
                    <p className="text-lg">{career.location}</p>
                      <div>
                    <span class="bg-gray-300 mr-3 p-2 roundend-md">Full Time: {} /</span>
                    <span class="bg-gray-300 mr-3 p-2 roundend-md"> Salary: {career.salary}</span>
                  </div>
                 </div>
                  <div class="w-auto p-2">
                  <div class="grid justify-items-end mt-6">
                  <button class="inline-block  w-40 px-4 py-2 text-white font-semibold tracking-tight bg-blue-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                  <button class="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-green-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Edit</button>
                  <button class="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-red-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Delete</button>
                </div>
                  </div>
                </div>
              </a>
            </div>       
         
          </div>

       
        </div>
        
    
        </>
      )})


  return (
<>
  

<section class="py-24 lg:pb-36 bg-gray-100 overflow-hidden">
    
 <div class="container px-4 mx-auto">
   {displayCareerdata}
  
  </div>
</section>

</>
  )
  
}

export default View
