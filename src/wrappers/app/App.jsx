import React, { Component } from 'react';
import Sidenav from '../../components/sidenav/Sidenav';
import Hoc from '../../hoc/hoc';
import InfoBox from '../infobox/infoBox';
import Profile from '../../components/profile/Profile';
import Heart from '../../assets/img/heart.png';
import FlexWrapper from '../flexWrapper/flexWrapper';
import Blog from '../blog/blog';
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
                  <li>Conhecimentos em Orientação a objetos</li>
                  <li>Conhecimentos em Python</li>
                  <li>Manutenção de micro</li>
                  <li>Redes de computadores</li>
                  <li>Linux</li>
                  <li>Louco por frontend</li>
                  <li>Lifeless</li>
                  <li>Node.js</li>
                </ul>
                <h4>===================================</h4>
              </InfoBox>
              <InfoBox type="inline">
                <h4>Características: </h4>
                <ul>
                  <li>Nível de Japônes: Avançado</li>
                  <li>Nível de Inglês: Avançado</li>
                </ul>
                <h4>===================================</h4>
              </InfoBox>
            </FlexWrapper>
            <Blog>
              <h1>Quem sou eu?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet eget quam ac posuere. Vestibulum vitae urna eros. In erat urna, commodo sed nulla sed, sagittis tempus est. Nunc ac nibh at dolor sollicitudin gravida. Duis fringilla at velit vel molestie. Pellentesque commodo finibus ligula, id luctus est pretium ut. Nam bibendum libero eget felis pharetra luctus. Donec sodales vehicula diam, et fermentum ante rutrum sit amet. Pellentesque eu lectus volutpat, rhoncus risus sit amet, fringilla neque. Suspendisse aliquet arcu mi, eu posuere eros rutrum et. Aliquam lacinia quam ut erat iaculis, eu gravida neque semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean viverra ante nec suscipit lacinia. Nulla eget leo odio. Nunc interdum augue lacus, vitae facilisis nulla rutrum vel.

Donec consequat vel nulla a pulvinar. Suspendisse commodo suscipit justo nec cursus. Vivamus eu diam vel libero laoreet pellentesque vel vitae est. Sed quam dui, hendrerit ut tempus pellentesque, dignissim ac lorem. Suspendisse aliquet massa id libero fringilla consequat. Pellentesque nec mollis eros. In egestas nisi ac cursus facilisis. Etiam et ultricies eros, eget ullamcorper ligula. Nulla porttitor arcu quis elit condimentum ornare. Suspendisse malesuada ante quis sapien lobortis molestie. Sed convallis neque ut augue maximus, ultricies viverra justo bibendum. Etiam ac lectus nisl. Vivamus scelerisque sed lacus vel efficitur.

Morbi egestas, urna in vestibulum blandit, velit est varius est, dignissim dictum quam ex vitae eros. Etiam pharetra ex risus, vel porta nulla suscipit eget. Maecenas interdum mattis odio pellentesque gravida. Nulla viverra id augue non interdum. Aliquam in pretium est, sed consectetur urna. Nam sed mauris blandit, finibus libero ac, volutpat dolor. Etiam a lorem odio. Cras condimentum facilisis sapien, non lobortis ex ultricies iaculis. Phasellus ut nulla rutrum urna porta tempor ut et lorem. Cras turpis turpis, elementum in consequat in, malesuada ac mi. Sed eu ante massa.

Sed a leo sit amet nisi dapibus varius vel at augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam aliquet mi quis dui faucibus, at gravida ante pellentesque. Aenean lacinia at orci sit amet varius. Quisque tempor bibendum quam ac lacinia. Vestibulum blandit imperdiet urna et aliquam. Phasellus sed porttitor libero. Duis lacinia at turpis eget aliquet. Maecenas eu malesuada ex, et interdum lectus. Curabitur ligula odio, convallis vitae arcu non, porttitor rutrum est. Suspendisse nec odio tincidunt, pellentesque dolor sit amet, luctus nulla. Maecenas gravida sit amet libero id dapibus. Nunc vestibulum tortor ac neque volutpat luctus a sit amet diam. Fusce sed congue nibh, in eleifend nunc. Nunc quis tellus feugiat mi fermentum sollicitudin nec sed ante. Aenean at porta est, ut cursus diam.

Curabitur sodales leo nunc, a rhoncus nisl tristique eget. Maecenas imperdiet leo ac vestibulum vehicula. Ut eu ipsum tellus. Curabitur scelerisque ac dolor vitae rutrum. Nunc volutpat orci urna. Etiam facilisis facilisis tellus, in posuere eros dictum eu. Fusce blandit imperdiet leo, eget tincidunt nulla convallis vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer et augue nec nibh elementum cursus non at tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </Blog>
          </FlexWrapper>
        </div>
      </Hoc>
    )
  }
}

export default App;
