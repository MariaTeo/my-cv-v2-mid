import React, {useEffect, useState} from 'react'
import Icon from '../icons/icon.component'
import { StyledIconite, Icoane2, ContentBox, Randuri } from './open-source.styled'


const StatsContent = () => {
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


  return(
    <ContentBox>
        <>
        {data && data.stats && stats.stat.map(({statIcon, statDescription}) => {
          return (
            <Randuri>
              <StyledIconite><Icon icon={statIcon}/></StyledIconite>
              <Icoane2 marginI={statIcon}>
                {statDescription.map(desc => {
                  return(
                    <div>
                      {desc}
                    </div>
                  )
                })}
              </Icoane2>
            </Randuri>
          )
        })}
        </>
      </ContentBox>
  )
}

export default StatsContent
