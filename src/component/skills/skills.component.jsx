import React, {useEffect, useState } from 'react'
import SectionTitle from '../section-title/section-title.component'
import * as SK from './skills.styled';
import Icon from '../icons/icon.component'
import {StyledAboutTitle} from '../about-me/about-me.styled'

const Skills = () => {
  const [data, setData ] = useState({});
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

const {legend = {}} = data
      
  return (
    <>
    <SectionTitle title={data.sectionTitle} />
    <StyledAboutTitle >{legend.title}</StyledAboutTitle>
    <SK.StyledBox>
      {data&& data.legend &&legend.itemList.map((legende, i) => {
        console.log(legende)
        return(
          <SK.StyledListLegends>
          <SK.StyledIconite><Icon icon={legende.legende} size='23' color={legende.color}/></SK.StyledIconite>
          <SK.StyledTextLegende>{legende.label}</SK.StyledTextLegende>
          <SK.StyledNumere>
            {i+1}
          </SK.StyledNumere>
          </SK.StyledListLegends>
        )
      })}
    </SK.StyledBox>
    </>
  )
}

export default Skills 
