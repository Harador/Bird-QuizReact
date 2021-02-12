import React from 'react'


export default class LiBird extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liStyle: ''}
    }
    handleClick = () =>{     
        if(!this.props.trueAnswer&&this.props.name === this.props.trueBird.name){
            this.setState({liStyle: 'true'})     
            this.props.getTrueAnswer()
        } else{
            !this.props.trueAnswer && this.setState({liStyle: 'false'}) 
        }
        this.props.showBird(this.props.name)
    }
    render() {
        return (
            <li onClick={this.handleClick}><span className={this.state.liStyle}></span>{this.props.name}</li>
        )
    }
}


