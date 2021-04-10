import React, { useEffect, useState } from 'react'
import * as YT from './youtube-btn.styled'
import Icon from '../icons/icon.component'


const YoutubeBtn = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch("http://localhost:5000/welcome")
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  return (
   <YT.StyledYoutube>
     <Icon size='19' icon='youtube' color='white'/>
   </YT.StyledYoutube>
  )
}

export default YoutubeBtn
