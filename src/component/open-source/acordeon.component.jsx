import React, { useEffect, useState } from 'react'
import {BoxWrapper, Title, Continut, Skilluri, Bara, FragmentBara } from './open-source.styled'

const Acordeon = ({proiecte}) => {
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
      <BoxWrapper>
        <Title>
        {proiecte.projectName}
        </Title>
        <Skilluri>
          {proiecte.skillsGained.map(({skillName}) => {
            return(
              <p>{skillName}</p>
            )
          })}
        </Skilluri>
        {data && data.projects && data.projects.project.map(({ skillsGained }) => {
        return  (
          <Bara>
            {proiecte.skillsGained.map(({color, percentage}) => {
              return (
                <FragmentBara color={color} percentage={percentage}/>
              )
            })}
          </Bara>
      )})}  
      </BoxWrapper>
      <Continut>
        {proiecte.projectStats.map((i) => {
          return(
            <>
              <div>{i.projectStatIcon}</div>
              <div>{i.projectStatInfo}</div>
            </>
          )
        })}
        <div>{proiecte.projectInfo}</div>
      </Continut>
    </>
  )
} 

export default Acordeon
