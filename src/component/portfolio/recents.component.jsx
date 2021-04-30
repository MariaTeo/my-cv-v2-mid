import React, { useEffect, useState } from 'react'
import { StyledAboutTitle } from '../about-me/about-me.styled'  
import { Half, Border } from './portfolio.styled'  

const Recents = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/portfolio")
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
      <StyledAboutTitle>{data.mainTitle}</StyledAboutTitle>
      <div>
        {data?.project1?.map((proiecte) => {
          return (
            <>
              <Border>
                <Half>
                <div>{proiecte.title}</div>
                <div>{proiecte.skills}</div>
              </Half>
              <div>{proiecte.image}</div>
              <div></div>
              </Border>
            </>
        )})}
      </div>
    </>
  )
} 

export default Recents
