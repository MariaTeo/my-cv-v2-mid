import React, { useEffect, useState } from 'react'
import * as SI from '../social-icons/social-icons.styled'
import Buttons from '../social-icons/buttons.component'
import Icon from '../../icons/icon.component'
import DataPop from './data-popup.component'
import PopUp from './popup.component'
  import ArrowDown from '../../arrow-down/arrow-down.component'

const SocialIcons = () => {
  const [ select, setSelect ] = useState();
  const [ data, setData ] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/connect")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);


const { socialList= [] } = data;

const hide = () => setSelect(null);

const clickMe = (iconite) => {
  setSelect(socialList.find((i) => i.iconite === iconite)) 
}

  return (
    <>
      <SI.SocialWrapper>
        {socialList.map( ( {iconite} ) => {
          return(
            <SI.StyledButoane>
              <Buttons onClick={() => clickMe(iconite)}
              key={iconite}
              size='50px'
              type='disc'
              bgCuloare={iconite === select?.iconite? '#d52027':'#1875f0'}
              > 
                <Icon size='40%' icon={iconite} color='white'/>
              </Buttons>
            </SI.StyledButoane>
          )
        } )}   
        {select &&(
          <DataPop>
            <PopUp {...select} close={hide} />
          </DataPop>
        )}
      </SI.SocialWrapper>
      <ArrowDown />
    </>
  )
}

export default SocialIcons
