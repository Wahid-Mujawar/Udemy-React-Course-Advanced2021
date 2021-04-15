import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] =useState(0);

  useEffect(() =>{
    console.log('Call useEffect')
  });

};

export default UseEffectBasics;
