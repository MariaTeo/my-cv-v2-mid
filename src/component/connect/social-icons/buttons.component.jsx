import React from 'react'
import * as BT from './buttons.styled'

export const Buttons = ({ children, type, bgCuloare, size, onClick, link }) => {
  return type === "disc" ? (
    <BT.StyledBtn size={size} color={bgCuloare} onClick={onClick}>
      {children}
    </BT.StyledBtn>
  ) : type === "link" ? (
    <BT.StyledBtnLink href={link} target="_blank" download>
      {children}
    </BT.StyledBtnLink>
  ) : (
    <BT.StyledButton color={bgCuloare}>{children}</BT.StyledButton>
  );
};

export default Buttons
