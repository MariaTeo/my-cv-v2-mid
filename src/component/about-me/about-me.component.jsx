import React, { useEffect, useState } from 'react'
import SectionTitle from '../section-title/section-title.component'
import * as AM from './about-me.styled'
import ArrowDown from '../arrow-down/arrow-down.component'
import Icon from '../icons/icon.component'

const AboutMe = () => {
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
    <>
        <SectionTitle title={data.sectionTitle}/>
      <AM.StyledName>{data.nameTitle}</AM.StyledName>
      <AM.StyledJob>{data.jobTitle}</AM.StyledJob>
      <AM.StyledAboutTitle>{data.moreTitle}</AM.StyledAboutTitle>
      <AM.StyledDescriptionList>
        <AM.StyledDescriptionAbout>
          {data.descriptionList}
        </AM.StyledDescriptionAbout>
      </AM.StyledDescriptionList>
      <div>
        <AM.PillBlue>
          <AM.StyledDownload>
            <Icon size='17' icon='download' color='white' />
              <AM.StyledIcon>{data.downloadButtonLabel}</AM.StyledIcon>
          </AM.StyledDownload>
        </AM.PillBlue>
      </div>
      <ArrowDown />
    </>
  )
} 

export default AboutMe
