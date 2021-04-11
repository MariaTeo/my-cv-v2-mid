import React, { useEffect, useState } from 'react'
import {StyledAboutTitle} from '../about-me/about-me.styled'
import SkillsContent from './skills-content.component'

const SkillList = () => {
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


return(
  <>
    <StyledAboutTitle >
        {data?.skillTypeList?.map((orice) => {
          return(
            <div>
              <p>
                {orice.category}
              </p>
              <SkillsContent continut={orice.skillList}/>
            </div>
          )
        {}
        })}
      </StyledAboutTitle>
  </>
  )
}
export default SkillList
