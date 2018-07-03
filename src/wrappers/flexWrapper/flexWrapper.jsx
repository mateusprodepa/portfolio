import React, { Component } from 'react';

const flexWrapper = (props) => {
  return (
    <div
      class="flexWrapper"
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
