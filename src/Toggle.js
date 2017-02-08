/**
 * Created by jodyl on 2/7/2017.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import './Toggle.css';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return(
            <button className={classnames('btn',this.state.isToggleOn ? "on" : "off")} onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        )
    }
}
export default Toggle