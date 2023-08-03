import React, { useState } from 'react'

function NewJob() {

    const [isShowMore, setIsShowMore] = useState(false);
      
    const toggleReadMoreLess = () => {
      setIsShowMore(!isShowMore);
    };
    const [state, setState] =useState(false)
  if(state){
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
                <label for="title" class="block text-sm font-bold ml-1 mb-2">Title</label>
                <div class="relative">
                  <input type="text" id="title" name="title" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                </div>
              <div>
                <label for="company" class="block text-sm font-bold ml-1 mb-2 ">Company</label>
                <div class="relative">
                  <input type="text" id="company" name="company" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                </div>
              <div>
                <label for="location" class="block text-sm font-bold ml-1 mb-2 ">Location</label>
                <div class="relative">
                  <select id="location" name="location" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
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
                <label for="salary" class="block text-sm font-bold ml-1 mb-2 ">Salary</label>
                <div class="relative">
                  <input type="number" id="salary" name="salary" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>               
              </div>
              <div>
                <label for="description" class="block text-sm font-bold ml-1 mb-2 ">Description</label>
                <div class="relative">
                <textarea
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"id="description" name="description"
                    rows="3"
                    placeholder="Your message"></textarea> </div>
                </div>
              <div>
                <label for="type" class="block text-sm font-bold ml-1 mb-2 ">Job Type</label>
                <div class="relative">
                <select id="type" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            >
                <option value="1">Full-Time</option>
                <option value="2">Part-Time</option>
                <option value="3">Remote</option>              
              </select> </div>                
              </div>
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 ">Experience</label>
                <div class="relative">
                <textarea
               class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"id="exampleFormControlTextarea1"
                 rows="3"
                  placeholder="Your message"></textarea> </div>                
              </div>
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 ">Skills</label>
                <div class="relative">
                <textarea
                   class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"id="exampleFormControlTextarea1"
                   rows="3"
                   placeholder="Your message"></textarea>  </div>
              </div>
              <div>
              <button  onClick={()=>{setState(false)}} class="py-3 px-4 w-32 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Close</button>
              <button type="submit"  class="py-3 ml-10 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  </main>
  )
        
    } else{

    return(
       
        <>

        <button onClick={()=>{setState(true)}} class="bg-indigo-500 px-7 py-2  mt-10 ml-56 rounded-md text-md text-white font-semibold">Do you want to create jobs?</button>
        <div class="max-w-2xl px-8 py-4 mx-auto mt-10 bg-white rounded-lg shadow-md dark:bg-gray-800" >
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span> 
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</a>
        </div> 
        <div class="mt-2">
          <a href="https://stackdiary.com/" class="text-2xl font-bold text-gray-700  hover:text-gray-600 dark:hover:text-gray-200 hover:underline">How to sanitiz array() in JS</a> 
          <p class="mt-2 text-gray-600 dark:text-gray-300">Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu.</p>
        </div> 
        <div class="flex items-center justify-between mt-4">
         
          <div class="flex items-center">
            <img src="https://stackdiary.com/140x100.png" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" /> 
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
          </div>
        </div>
     
      <div className="card">
      <h3>Description</h3>

      <p className='mb-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
        quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
        ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
        molestias
      </p>

      
      {isShowMore && (
        <p>
          sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
          hic vitae modi eum nostrum id perspiciatis impedit dolores.
        </p>
      )}

      <button class="text-blue-600 dark:text-blue-400 hover:underline" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
    </div>
      
      </>
  )
}}

export default NewJob
