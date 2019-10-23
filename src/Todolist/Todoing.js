import React, { Component } from 'react'

export default class Todoing extends Component {

    render() {

        let self = this;

        // listgoto
        // -> 未完成事项的清单
        let listgoto = this.props.todo.map((item,idx)=>{
            if(!item.state){
                return(
                    <li key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{self.props.changeTodo(idx)}}/>
                        {item.title}-----<button onClick={()=>{self.props.delTodo(idx)}}>删除</button>
                    </li>);
            }
            return null;
        });

        // listover 
        // 已经完成事项的清单
        let listover = this.props.todo.map((item,idx)=>{
            if(item.state){
                return(
                    <li key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{self.props.changeTodo(idx)}}/>
                        {item.title}-----<button onClick={()=>{self.props.delTodo(idx)}}>删除</button>
                    </li>);
            }
            return null;
        });
    
        return(
            <div>
                <div>
                    <h1>DOING</h1>
                    <p>You have {this.props.goto} things to do!</p>
                    <ul className="list">{listgoto}</ul>
                </div>
                <div>
                    <h1>FINISH</h1>
                    <p>You have finished {this.props.over} things~</p>
                    <ul className="list">{listover}</ul>
                </div>
            </div>
        )
    }
}