import React, { useEffect, useState } from 'react'
import OpenFirstPart from './open-first.component';
import AccordionSource from './accordion-source.component';


const OpenContent = () => {
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
      <OpenFirstPart/>
      <AccordionSource/>
    </>
  )
} 

export default OpenContent
