import React, { Component } from 'react';
import Sidenav from '../../components/sidenav/Sidenav';
import Hoc from '../../hoc/hoc';
import InfoBox from '../infobox/infoBox';
import Profile from '../../components/profile/Profile';
import Heart from '../../assets/img/heart.png';
import FlexWrapper from '../flexWrapper/flexWrapper';
import Quotes from '../../components/quotes/quotes';
import Blog from '../blog/blog';
import Projetos from '../../components/projetos/Projetos';
import './App.css';

class App extends Component {

  state = {
    main: '',
  }

  render() {
    return (
      <Hoc>
        <Sidenav
          main={ this.state.main }
          />
        <div id="main" ref={c => !this.state.main && this.setState({ main: c })}>
          <Profile />
          <FlexWrapper
            direction='row'
            align='flex-start'
            justify='flex-start'
            >
            <FlexWrapper
              direction='column'
              align='flex-start'
              justify='flex-start'
              >
              <InfoBox type="inline">
                <h4>Mateus Souza, 18 anos</h4>
                <span>Programador Junior</span>
                <p>Universidade da Amazônia - UNAMA</p>
                <ul>
                  <li>ReactJS</li>
                  <li>HTML, CSS, e Javascript <img src={ Heart } alt="Heart" className="heart"></img></li>
                  <li>Orientação a objetos</li>
                  <li>Manutenção de micro</li>
                  <li>Redes de computadores</li>
                  <li>Linux</li>
                  <li>Louco por frontend</li>
                  <li>Lifeless</li>
                  <li>Node.js</li>
                </ul>
              </InfoBox>
              <InfoBox type="inline">
                <h4>Características: </h4>
                <ul>
                  <li>Nível de Japônes: Avançado</li>
                  <li>Nível de Inglês: Avançado</li>
                </ul>
              </InfoBox>
            </FlexWrapper>
            <FlexWrapper
              direction="column"
              align="center"
              justify="center"
            >
              <Blog>
                <h1>Quem sou eu?</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel molestie. Pellentesque commodo finibus ligula, id luctus est pretium ut. Nam bibendum libero eget felis pharetra luctus. Donec sodales vehicula diam, et fermentum ante rutrum sit amet. Pellentesque eu lectus volutpat, rhoncus risus
                dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel molestie. Pellentesque commodo finibus ligula, id luctus est pretium ut. Nam bibendum libero eget felis pharetra luctus. Donec sodales vehicula diam, et fermentum ante rutrum sit amet. Pellentesque eu lectus volutpat, rhoncus risus
                </p>
                <Quotes>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel</Quotes>
                <p>
                dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel molestie. Pellentesque commodo finibus ligula, id luctus est pretium ut. Nam bibendum libero eget felis pharetra luctus. Donec sodales vehicula diam, et fermentum ante rutrum sit amet. Pellentesque eu lectus volutpat, rhoncus risus
                dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel molestie. Pellentesque commodo finibus ligula, id luctus est pretium ut. Nam bibendum libero eget felis pharetra luctus. Donec sodales vehicula diam, et fermentum ante rutrum sit amet. Pellentesque eu lectus volutpat, rhoncus risus
                </p>
              </Blog>
              <FlexWrapper
                direction="row"
                align="center"
                justify="center"
                scroll="auto"
                maxWidth={ window.innerWidth - 432 - 340 }>
                <Projetos/>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </div>
      </Hoc>
    )
  }
}

export default App;
