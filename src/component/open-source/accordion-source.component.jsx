import React, { useEffect, useState } from 'react'
import  Acordeon  from './acordeon.component'

const AccordionSource = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/openSource")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);



  return (
    <>
    {data?.projects?.project.map((items) => {
      return(
        <Acordeon proiecte={items}/>
      )
    })}

    
    </>
  )
} 

export default AccordionSource
