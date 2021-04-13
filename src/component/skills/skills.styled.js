import styled from 'styled-components'

export const StyledTitlu = styled.h3`
  font-weight: 600;
  color: #707070;
  text-align: left;
  font-size: 22px;
  line-height: 48px;
  padding-left: 20px;
`

export const StyledBox = styled.div`
  border: 2px solid #707070;
  margin: 0 30px;
  border-radius: 6px;
  list-style-type: none;

`

export const StyledListLegends = styled.div`
  display: flex;

  &:not(:last-child) {
  border-bottom: 2px solid #707070;
  border-top: 0;
  }
`

export const StyledTextLegende = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #707070;
  margin-left: 10px;
  line-height: 40px;
  padding-top: 13px;
`

export const StyledIconite = styled.div`
  line-height: 40px;
  margin: 10px;
`
export const StyledNumere = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #707070;
  position: absolute;
  line-height: 40px;
  margin-top: 13px;
  padding-left: 270px;
`

const colorList = {
  heart: "#D52027",
  trophy: "#50D166",
  book: "#F18F1C",
}

export const StyledSkillsData = styled.div`
  background-color: ${({ type }) => colorList[type]};
  color: white;
  border-bottom: 2px solid #707070;
  border-radius: 15px;
  margin: 0 5px;
  padding: 0 6px;
  font-size: 13px;
  display: inline-block;
  text-align: center;
  height: 30px;
  line-height: 30px;
`
