import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size)
  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </React.Fragment>
  )
};

export default UseEffectCleanup;
