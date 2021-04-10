import styled from 'styled-components'
import imageMe from '../../asset/images/avatar.jpeg'


export const ImageMe = styled.img.attrs({src:`${imageMe}`})`
  width: 80%;
  background-color: white;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transform: rotate(-2.5deg);
  padding: 10px;
  margin: 0 30px;

  &:after {
    content: "";
    border-radius: 6px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
    left: 10px;
    background-size: cover;
  }
`

export const AvatarWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  padding-bottom: 40px;
`

