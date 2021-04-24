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
  margin: 20px 10px;
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
  font-weight: 500;
  color: #707070; 
  margin: 20px 10px;
  display: flex; 
`

export const NumeSkill = styled.div`
  margin-right: 10px;
`

export const Cutiuta = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  margin: 0 30px;
`
export const Button = styled.div`
  height: 50px;
  width: 40px;
  background-color: #ff006d;
  margin-left: 1px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-bottom: 30px;
`

export const Roze = styled.div`
  display: flex;
  justify-content: center;
`

export const Statusuri = styled.div`
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`


export const StatusuriInfo = styled.div`
  margin-left: 10px;
`

export const Display = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`

export const ProiecteInfo = styled.div`
  display: flex;
  justify-content: center;
  line-height: 30px;
  border-bottom: 2px solid grey;
`
export const ContinutProiecte = styled.div`
margin: 10px;
`

export const Link = styled.div`
  width: 80%;
  height: 40px;
  background-color: #1875f0;
  color: white;
  margin: 20px;
  margin-left: 30px;
  border-radius: 20px;
  text-align:center;
  padding-top: 5px;
  padding-bottom: 6px;
  font-size: 11px;
  font-weight: 500;
`

export const ContinutB = styled.div`
  margin: 8px;
`
