import React, {useEffect, useState } from 'react'
import SectionTitle from '../section-title/section-title.component'

const Skills = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/skills")
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
    </>
  )
}

export default Skills 
