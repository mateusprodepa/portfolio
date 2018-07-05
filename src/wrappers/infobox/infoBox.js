import React from 'react';
import './infoBox.css';

const infoBox = (props) => {
  return (
    <div className={ `box ${props.type}` }>
      { props.children }
    </div>
  )
}

export default infoBox;
