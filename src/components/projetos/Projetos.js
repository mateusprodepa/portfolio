import React, { Component } from 'react';
import Projeto from './projeto/projeto';
import './Projetos.css';

class Projetos extends Component {

  state = {
    projetos: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('https://portfolio-1751d.firebaseio.com/projetos.json')
    .then(res => res.json())
    .then(res => {
      let projs = [];
      for(var i in res) {
        projs.push(res[i]);
      }

      this.setState({
        projetos: projs,
        isLoading: false
      });
    });
  }

  render() {
    const { projetos, isLoading } = this.state;
    let conteudo;

    isLoading ?
    conteudo = (
      <div className="sk-fading-circle">
      <div className="sk-circle1 sk-circle"></div>
      <div className="sk-circle2 sk-circle"></div>
      <div className="sk-circle3 sk-circle"></div>
      <div className="sk-circle4 sk-circle"></div>
      <div className="sk-circle5 sk-circle"></div>
      <div className="sk-circle6 sk-circle"></div>
      <div className="sk-circle7 sk-circle"></div>
      <div className="sk-circle8 sk-circle"></div>
      <div className="sk-circle9 sk-circle"></div>
      <div className="sk-circle10 sk-circle"></div>
      <div className="sk-circle11 sk-circle"></div>
      <div className="sk-circle12 sk-circle"></div>
    </div>
    ) :
    conteudo = projetos.map(projeto =>
      <Projeto
        nome={ projeto.nome }
        desc={ projeto.desc }
        img={ projeto.img }/>)

    return (
      <div className="projetos">
        { conteudo }
      </div>
    )
  }
}

export default Projetos;
