import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [careerData, setCareerData] = useState([]);
  const [faqData, setFaqData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/careers`)
      .then((res) => res.json())
      .then((data) => setCareerData(data))
      .finally(setIsLoading(false));

    fetch(`http://localhost:3000/faq`)
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .finally(setIsLoading(false));
  }, []);

  const values = { careerData, setCareerData, setIsLoading, faqData, setFaqData };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };

//https://skill-hunter-server.onrender.com/careers

//https://skill-hunter-server.onrender.com/careers
//http://localhost:3000/careers
