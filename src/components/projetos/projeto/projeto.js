import React from 'react';
import './projeto.css';

const projeto = (props) => {
  return (
    <div className="projeto">
      <div className="projeto__card">
        <img src={ props.img } alt="projeto"></img>
        <div className="projeto__box">
          <h3 className="projeto__nome">{ props.nome }</h3>
          <span className="projeto__desc">{ props.desc }</span>
        </div>
      </div>
    </div>
  )
}

export default projeto;
