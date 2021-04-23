import styled from 'styled-components'

export const StyledIconite = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 7px;
  margin-top: 5px;
`


export const Icoane2 = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
  margin-left: 13px;
`

export const Randuri = styled.div`
  padding: 5px;
  display: flex;
  &:not(:last-child) {
  border-bottom: 2px solid #707070;
  border-top: 0;
  }
  line-height: 30px;
`

export const ContentBox = styled.div`
  border: 2px solid #707070;
  margin: 0 30px;
  border-radius: 6px;
`

export const Bara = styled.div`
  height: 10px;
  display: flex;
  width: 84%;
  margin-left:30px;
  margin-bottom:30px;
`

export const FragmentBara = styled.span`
width: ${props => `${props.percentage}%`};
background-color: ${props => props.color};
  
`
export const Proiecte = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
  width: 80%;
  border: 2px solid grey;
  border-radius: 6px;
  margin: 0 30px;
`
export const TitluProiect = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
  width: 80%;

`
export const BoxWrapper = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070;
`
export const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
`
export const Continut = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
  height: ${({close}) => (close?'auto':'0px')};
  overflow: hidden;
`

export const Skilluri = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #707070; 
`

export const Cutiuta = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  margin: 0 30px;
`
export const Button = styled.div`
  height: 40px;
  width: 40px;
  background-color: purple;
  margin-left: 50px;
`
