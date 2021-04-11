import React from 'react'
import {StyledSkillsData} from './skills.styled'


const SkillsData = ({type, label}) => {
  return(
    <>
      <StyledSkillsData type={type} >{label}</StyledSkillsData>
    </>
  )
}

export default SkillsData
