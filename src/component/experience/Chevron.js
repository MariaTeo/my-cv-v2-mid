import React from 'react'
import {ChevronWrapper, Chevrone } from './experience.styled'


function Chevron(props) {
  console.log(props.isOpen)
  return(
    <ChevronWrapper>
      <Chevrone isOpen={props.isOpen}/>
    </ChevronWrapper>
  )
}


export default Chevron
