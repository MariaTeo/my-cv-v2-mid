import styled from 'styled-components'

export const StyledSectionTitle = styled.div`
  padding: 10px;
  height: 60px;
  background-color: #d52027;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    background-color: #d52027;
    left: -36px;
    top: 0;
    bottom: 0;
    right: -36px;
  }
  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`

export const StyledTitlu = styled.div`
  height: 40px;
  line-height: 55px;
  text-align: center;
  color: white;
  position: relative;
  font-size: 24px;
  font-weight: 600;
`
