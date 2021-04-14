import React, { useEffect, useState } from 'react'
import {StyledAboutTitle} from '../about-me/about-me.styled'
import Icon from '../icons/icon.component'
import {StyledBox, StyledIconite} from '../skills/skills.styled'
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
        {data&& data.stats && stats.stat.map((continut) => {
          console.log(continut)
          return(
            <StyledIconite><Icon icon={continut.statIcon} size='23' /></StyledIconite>
          )
        })}
        </Icoane>
        <Icoane2>
        {stats?.stat?.statDescription}
        </Icoane2>
      </StyledBox>
    </>
  )
} 

export default OpenFirstPart
