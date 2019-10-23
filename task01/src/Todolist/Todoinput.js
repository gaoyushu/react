import React, { Component } from 'react';

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val: '2017011951 gaoyushu'
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e)} placeholder={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}