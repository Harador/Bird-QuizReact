import './App.css';
import './Adaptive.css';
import data from './dbBirds'
import React from 'react'
import {Logo, Menu, Main, Content, Footer, Win} from './modules';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      trueBird: this.getRandom(0,5),
      trueAnswer: false,  
      score: 10,
      win: false,
    }
    this.getTrueAnswer = this.getTrueAnswer.bind(this)
  }
  getRandom(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getTrueAnswer(){
    this.setState({
      trueAnswer: true,
    })
  }
  nextSection = ()=>{
    let section = this.state.currentSection
    this.setState({      
      currentSection: ++section,
      trueBird: this.getRandom(0,5),
      trueAnswer: false,  
      score: 10,
      win: false,
    })
  }
  render() {
    let currentSection = this.state.currentSection;    
    let trueBird = this.state.trueBird;
    let trueAnswer = this.state.trueAnswer;  
    return (
      <div className="wrapper">        
        <Logo score={this.state.score}/>
        <Menu currentSection={this.state.currentSection}/>
        {!this.state.win
        ? <>
            <Main bird={data[currentSection][trueBird]} trueAnswer={trueAnswer}/>
            <Content currentSection={data[currentSection]} trueBird={data[currentSection][trueBird]} getTrueAnswer={this.getTrueAnswer}/>
            <Footer nextSection={this.nextSection} trueAnswer={this.state.trueAnswer}/>
          </>
        :  <Win score={this.state.score}/>
        }        
      </div>
    )
  }
}

export default App;
