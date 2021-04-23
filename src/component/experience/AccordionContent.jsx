import React, { useState, useEffect } from 'react'
import {AccordionWrapper, OpenAccordion, AccordionData, Logo, Titlu, SubTitlu, DescContent, StyledDates, Joburi } from './experience.styled'
import Chevron from './Chevron'
import {images} from '../../constants/images'


const AccordionContent = ({joburi}) => {
  const [isOpen, setIsOpen ] = useState(false)

  const toggleAccordion = () => {
    setIsOpen( (open) => !open )
  }

  const trimIconPath = (str) => {
    const strArr = str.split('/')
    return strArr[strArr.length-1].split('.')[0]
  }  

  return(
    <>
      <AccordionWrapper>
        <OpenAccordion onClick={toggleAccordion}>
          <Logo icon={images[trimIconPath(joburi.iconWay)]} />
          <DescContent>
             <Titlu>{joburi.numeJob}</Titlu>
             <SubTitlu>{joburi.numeCompanie}</SubTitlu>
          </DescContent>
          <Chevron isOpen={isOpen}/>
        </OpenAccordion>
        <AccordionData isOpen={isOpen}>
          <StyledDates>
            {joburi.dataStart}
          </StyledDates>
         <div>
           {joburi.moreInfoList}
         </div>
        </AccordionData>
      </AccordionWrapper>
    </>
  )
}

export default AccordionContent
