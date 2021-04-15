import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return(
    <React.Fragment>
      <button className="btn" onClick = {() =>setShow(!show)}>
        Show/Hide
      </button>
    </React.Fragment>
  )
};

const Item = () => {
  return (
      <div style={{marginTop: '2rem'}}>
      <h1>Window</h1>
      </div>
    )
}
export default ShowHide;
