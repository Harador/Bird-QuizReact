import React, { Component } from 'react'
import BirdContent from '../components/BirdContent';
import BirdList from '../components/BirdList';
export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectBird: false,
            trueAnswer: false,
        }

    }    
    showBird = (name) =>{
        let selectBird = this.props.currentSection.filter((chirik)=> (chirik.name == name))[0]
        this.setState({selectBird: selectBird})
    }
    changeTrueInComponent = () => {
        this.setState({trueAnswer: true})
        this.props.getTrueAnswer()
    }
    render() {
        const {currentSection, trueBird, getTrueAnswer} = this.props;
        return (
            <div className="Content">
                <BirdList showBird={this.showBird} currentSection={currentSection} trueBird={trueBird} trueAnswer={this.state.trueAnswer} getTrueAnswer={this.changeTrueInComponent}/>            
                <BirdContent bird={this.state.selectBird}/>
            </div>
        )
    }
}





