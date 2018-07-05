import React, { Component } from 'react';
import Me from '../../assets/img/me.jpg';
import './Profile.css';

class Profile extends Component {

  state = {

  }

  render() {
    return (
      <div className="profile">
        <div className="profile__card">
          <img src={ Me } alt="profileImg" className="profile__image"></img>
          <h2 className="profile__title">Front-end Developer</h2>
          <span>Portfólio dele <span role="img" aria-label="up-finger">👆</span></span>
        </div>
        <div className="redes-sociais">
          <i className="fab fa-3x fa-facebook"></i>
          <i className="fab fa-3x fa-twitter-square"></i>
          <i className="fab fa-3x fa-linkedin"></i>
        </div>
      </div>
    )
  }
}

export default Profile;
