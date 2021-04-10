import React from 'react'
import {DataStyles} from '../social-icons/social-icons.styled'

export const DataPop = ({ children, jc, span, height }) => {
  return (
    <DataStyles height={height} jc={jc} span={span}>
      {children}
    </DataStyles>
  );
};

export default DataPop
