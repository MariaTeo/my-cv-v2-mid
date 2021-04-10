import React, { useEffect, useState } from 'react'
import * as ST from './section-title.styled'
import YoutubeBtn from '../youtube-btn/youtube-btn.component'

const SectionTitle = ({title}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/welcome")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  return (
    <div>
      <ST.StyledSectionTitle>
        <ST.StyledTitlu>
          {title}
        </ST.StyledTitlu>
      </ST.StyledSectionTitle>
      <YoutubeBtn />
    </div>
  )
}

export default SectionTitle
