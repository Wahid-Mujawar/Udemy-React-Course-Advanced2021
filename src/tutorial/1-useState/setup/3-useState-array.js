import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople]=useState(data);

  return (
    <React.Fragment>
      {people.map((person)  => {
        console.log(person)
        return 'Array'
      })}
    </React.Fragment>
  )
};

export default UseStateArray;
