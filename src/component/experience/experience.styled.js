import styled from 'styled-components'

export const AccordionWrapper  = styled.div`
  display: flex;
  flex-direction: column;

`
export const AccordionBox  = styled.div`
    border: 2px solid grey;
   
`

export const BorderBottom  = styled.div`
  &:not(last-child){
    border-bottom: 2px solid grey;
  }
  &:last-child{
    border: 0;
  }
`
export const OpenAccordion = styled.div`
  padding: 10px;
`



export const ChevronWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid grey;
  border-radius: 50%;
`


export const Chevrone = styled.div`
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  transform: ${({ isOpen }) => {
    return isOpen
      ? "rotate(135deg) translate(-10%, 10%)"
      : "rotate(-45deg) translate(-10%, 10%)";
  }};
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  margin: auto;
`

export const AccordionData = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  line-height: 20px;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
 
`

export const Logo = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: url(${({ icon }) => (icon ? icon : "")});
  background-size: cover;
  margin-left: -10px;
`

export const Titlu = styled.div`
  padding: 10px;
`

export const SubTitlu = styled.div`
  padding: 10px;
`
