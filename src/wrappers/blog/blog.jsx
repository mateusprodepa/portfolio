import React, { Component } from 'react';
import './blog.css';

const blog = (props) => {
  return (
    <div className="blog">
      { props.children }
    </div>
  )
}

export default blog;
