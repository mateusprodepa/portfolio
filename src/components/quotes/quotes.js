import React from 'react';
import './quotes.css';

const quotes = (props) => {
  return (
    <div className="quotes-div">
      <blockquote className="quotes">{ props.children }</blockquote>
    </div>
  )
}


export default quotes;
