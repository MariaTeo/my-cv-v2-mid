import React, { useEffect, useState } from 'react'
import {StyledAboutTitle} from '../about-me/about-me.styled'
import {StyledBox} from '../skills/skills.styled'
import { Icoane, Icoane2} from './open-source.styled'

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

  const {stats = {}} = data
  const {stat = {}} = data
 console.log(stat)

  return (
    <>
      <StyledAboutTitle>{data?.stats?.statsName}</StyledAboutTitle>
      <StyledBox>
        <Icoane>
        {stat?.statIcon}
        </Icoane>
        <Icoane2>
        {stat?.statDescription}
        </Icoane2>
      </StyledBox>
    </>
  )
} 

export default OpenFirstPart
