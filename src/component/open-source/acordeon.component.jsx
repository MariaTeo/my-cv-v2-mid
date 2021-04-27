import React, { useEffect, useState } from 'react'
import {BoxWrapper, Title, Continut, Skilluri, Bara, FragmentBara, Cutiuta, Button, ContinutB, Roze, Statusuri, StatusuriInfo, Display, ProiecteInfo, Link, ContinutProiecte,NumeSkill } from './open-source.styled'
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
              <NumeSkill>{skillName}</NumeSkill>
            )
          })}
        </Skilluri>
        
      </BoxWrapper>
      <Continut close={close}>
        <Statusuri>
          {proiecte.projectStats.map((i) => {
            return(
              <Display>
                <Icon color='grey' icon={i.projectStatIcon} size='20'/>
                <StatusuriInfo>{i.projectStatInfo}</StatusuriInfo>
              </Display>
            )
          })}
        </Statusuri>
        <ProiecteInfo>
          <ContinutProiecte>
            {proiecte.projectInfo}
          </ContinutProiecte>
        </ProiecteInfo>
        <Link>
          <ContinutB>
            <a href={proiecte.projectLink.link} target="_blank">
              <Icon icon='github' size='16' color='white' />{proiecte.projectLink.link}
            </a>
          </ContinutB>
        </Link>
      </Continut>
      <Bara>
        {proiecte.skillsGained.map(({color, percentage}) => {
          return (
            <FragmentBara color={color} percentage={percentage}/>
          )
        })}
      </Bara>  
      </Cutiuta>
        <Button onClick={chevron}>
          <Icon color='white' icon={proiecte.projectIcon.mandatoryIcon}/>
        </Button> 
        <Roze>
        <div>
        {proiecte.projectIcon.extraIcon.map(({icon, link
        }) => {
            return(
              <a href={link} target="_blank">
                <Button>
                  <Icon color="white" icon={icon}/>
                </Button>
              </a>
            )
          })}
        </div>
      </Roze>
    </>
  )
} 

export default Acordeon
