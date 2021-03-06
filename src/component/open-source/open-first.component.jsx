import React, { useEffect, useState } from 'react'
import {StyledAboutTitle} from '../about-me/about-me.styled'
import StatsContent from './stats-content.component'

const OpenFirstPart = () => {
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
      <StyledAboutTitle>{data?.stats?.statsName}</StyledAboutTitle>
      <StatsContent/>
      <StyledAboutTitle>{data?.projects?.projectName}</StyledAboutTitle> 
    </>
 )}


export default OpenFirstPart
