import React from 'react'
import IcomoonReact from 'icomoon-react'
import IconSet from '../../asset/selection.json'

const Icon = ({color, size, icon}) => {
  return (
    <IcomoonReact iconSet = {IconSet} icon={icon} size={size} color={color} />
  )
}

export default Icon
