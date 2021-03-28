import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue]=useState(0);

  return (
    <React.Fragment>
      <section style={{margin:'4rem 0'}}>
        <h2>Regular Counter</h2>
        <h2>{value}</h2>
        
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
