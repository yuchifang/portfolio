import React, { Component } from 'react';
import Header from './conponents/Header/Header';
import Section from './conponents/Section_personal/Section_personal';
import Portfolios from './conponents/Portfolios/Portfolios';
import Resume from './conponents/Resume/Resume';
import Nav from './conponents/Nav/Nav'
import './App.css';

class App extends Component {
  render() {//vh 可視範圍
    return (//box-sizing: border-box 將margin 內縮
      <div className="element">
        <Nav/>
        <Header/>
        <Section/>
        <Portfolios/>
        <Resume/>
      </div>
    );
  }
}

export default App;
