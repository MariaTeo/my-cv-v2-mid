import styled from 'styled-components'

export const AccordionWrapper  = styled.div`
  display: flex;
  flex-direction: column;
`
export const AccordionBox  = styled.div`
    border: 2px solid grey;
    border-radius: 13px;
    margin: 0 30px;
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
  display: flex;
  font-size: 15px;
  font-weight: 500;
  color: #707070;
`

export const ChevronWrapper = styled.div`
  width: 50px;
  height: 50px;
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
  margin: 14px;
`

export const AccordionData = styled.div`

  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  line-height: 20px;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
  border-top: ${({ isOpen }) => (isOpen ? "2px solid grey" : "auto")};
  padding: ${({ isOpen }) => (isOpen ? "10px" : "auto")};
  display: ${({ isOpen }) => (isOpen ? "block" : "flex")};
  font-size: 15px;
  font-weight: 500;
  color: #707070;
`

export const Logo = styled.div`
  height: 50px;
  width: 60px;
  border-radius: 50%;
  background: url(${({ icon }) => (icon ? icon : "")});
  background-size: cover;
;
`

export const Titlu = styled.div`
  padding: 5px 5px;
`

export const SubTitlu = styled.div`
  padding: 0 5px;
`

export const DescContent = styled.div`
  padding: 0 5px;
`


export const StyledDates = styled.div`
  padding: 5px 0;
  font-size: 13px;
`
