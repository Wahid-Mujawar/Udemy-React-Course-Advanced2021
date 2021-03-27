import React, { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson]=useState({
    name: 'Wahid',
    age:'22',
    message:'Engineer 2020',
  })

  return (
    <React.Fragment>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
    </React.Fragment>
  )
};

export default UseStateObject;
