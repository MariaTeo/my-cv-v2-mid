import React, { useState, useEffect } from 'react';
import AccordionContent from './AccordionContent';
import {BorderBottom} from './experience.styled'

const Accordion = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (
          await fetch('http://localhost:5000/experience')
        ).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log('nu merge useEffect', error);
    }
  }, []);

  return (
    <>
      {data?.listaJoburi?.map((joburi) => {
        return (
          <BorderBottom>
            <AccordionContent joburi={joburi}/>
          </BorderBottom>
        );
      })}
    </>
  );
};

export default Accordion;
