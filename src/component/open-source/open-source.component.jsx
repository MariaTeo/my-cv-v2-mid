import React, { useEffect, useState } from 'react'
import SectionTitle from '../section-title/section-title.component'
import ArrowDown from '../arrow-down/arrow-down.component'
import OpenContent from './open-content.component'
  
const OpenSource = () => {
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
      <SectionTitle title={data.sectionTitle} />
      <OpenContent />
      <ArrowDown />
    </>
  )
} 

export default OpenSource
