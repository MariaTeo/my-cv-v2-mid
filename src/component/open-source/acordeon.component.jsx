import React, { useEffect, useState } from 'react'
import {BoxWrapper, Title, Continut, Skilluri, Bara, FragmentBara, Cutiuta, Button } from './open-source.styled'
import Icon from '../icons/icon.component'

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

  const [ close, setClose ] = useState(false)
  const chevron = () => {
    setClose((value) => !value)
  }


  return (
    <>
      <Cutiuta>
      <BoxWrapper >
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
        
      </BoxWrapper>
      <Continut close={close}>
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
      </Cutiuta>
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
      <Button onClick={chevron}>
        <Icon icon={proiecte.projectIcon.mandatoryIcon}/>
      </Button>
      <Button>
      {proiecte.projectIcon.extraIcon.map(({icon, link}) => {
          return(
            <Icon icon={icon} type="link" href={link} target="_blank"/>
          )
        })}
      </Button>
    </>
  )
} 

export default Acordeon
