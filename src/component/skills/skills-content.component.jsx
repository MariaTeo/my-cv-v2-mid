import React from 'react'
import SkillsData from './skills-data.component'

const SkillsContent = ({continut}) => {
  return(
    <>
      {continut.map((item) => {
        return(
          <SkillsData type={item.type} label={item.label} />
        )
      })}
    </>
  )
}

export default SkillsContent
