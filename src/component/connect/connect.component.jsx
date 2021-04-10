import React, { useEffect, useState } from 'react'
import SectionTitle from '../section-title/section-title.component'
import *  as CN from '../connect/connect.styled'
import SocialIcons from '../connect/social-icons/social-icons.component'

const Connect = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/connect")
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
      <SectionTitle title={data.sectionTitle} />
      <CN.AvatarWrapper>
         <CN.ImageMe />
      </CN.AvatarWrapper>
      <SocialIcons />
    </>
  )
} 

export default Connect
