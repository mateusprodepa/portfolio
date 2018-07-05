import React from 'react';
import './flexWrapper.css';

const flexWrapper = (props) => {
  return (
    <div
      className="flexWrapper"
      style={{
        display: 'flex',
        flexDirection: props.direction,
        alignItems: props.align,
        justifyContent: props.justify,
        margin: 0,
        padding: 0,
      }}
      >
      { props.children }
    </div>
  )
}

export default flexWrapper;
