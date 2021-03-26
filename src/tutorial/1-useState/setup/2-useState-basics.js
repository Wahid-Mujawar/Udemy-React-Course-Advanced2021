import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] =useState('Random Title')

  const handleClick = () =>{
    if(text === 'Random Title')
    {
      setText('Change To New Tilte')
    }
    else{
      setText('Random Title')
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
