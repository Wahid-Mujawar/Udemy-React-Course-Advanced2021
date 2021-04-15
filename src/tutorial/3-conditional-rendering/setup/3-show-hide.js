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

export default ShowHide;
