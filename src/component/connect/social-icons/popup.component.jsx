import React from 'react'
import Buttons from '../social-icons/buttons.component'
import Icon from '../../icons/icon.component'
import DataPop from './data-popup.component'
import * as IS from './social-icons.styled'

const PopUp = ({ title, description, label, link, close }) => {
  return (
    <IS.StyledWrapper>
      <IS.WrapperHead>
        <IS.StyledTitle>{title}</IS.StyledTitle>
        <Buttons onClick={close} type="disc" bgCuloare="#1875F0">
          <span style={{ fontSize: "20px" }}></span>
          <Icon size="50%" icon="cross" color="white" />
        </Buttons>
      </IS.WrapperHead>
      <IS.StyledDescription>{description}</IS.StyledDescription>
      <DataPop jc="center">
        <Buttons type="link" link={link} target="_blank">
          <span className="text">{label}</span>
        </Buttons>
      </DataPop>
    </IS.StyledWrapper>
  );
};

export default PopUp
