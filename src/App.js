import './App.css';
import React from 'react'
import {Logo, Menu, Main, Content, Footer} from './modules';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper">
        <Logo/>
        <Menu/>
        <Main/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
