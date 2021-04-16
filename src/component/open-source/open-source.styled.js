import styled from 'styled-components'

export const StyledIconite = styled.div`
  width: 40px;
  height: 40px;
`


export const Icoane2 = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #707070;
  background: red;
  /* justify-self: end;  */
  /* margin-left: ${({ marginI }) => marginI === "codewars" ? "0" : "14px"}; */

`

export const Randuri = styled.div`
  padding: 5px;
  display: flex;
  &:not(:last-child) {
  border-bottom: 2px solid #707070;
  border-top: 0;
  }
`

export const ContentBox = styled.div`
  border: 2px solid #707070;
  margin: 0 30px;
  border-radius: 6px;
`
