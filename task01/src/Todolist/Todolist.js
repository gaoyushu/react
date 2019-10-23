import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: localStorage.getItem("todolist")? JSON.parse(localStorage.getItem("todolist")):[],
            goto: 0,
            over: 0
        }
    }

    componentWillMount(){
        this.countItem();
    }

    // 添加任务
    addItem = (msg)=>{
        var msgjson = {
            title: msg,
            state: false
        }
        var todo = [...this.state.todo, msgjson];
        this.setState({ // 注意异步操作
            todo: todo,
            goto: this.state.goto+1
        },()=>{
            localStorage.setItem("todolist", JSON.stringify(todo));
        })
    }

    // 删除任务
    delItem = (a)=>{
        var todo = [...this.state.todo];
        
        todo.splice(a,1);
        this.setState({
            todo:todo
        },()=>{
            this.countItem();
            localStorage.setItem("todolist", JSON.stringify(todo));
        });
    }

    // 改变状态
    changeItem = (a) =>{
        var todo = [...this.state.todo];
        todo[a].state = !todo[a].state;
        this.setState({
            todo:todo
        },()=>{
            this.countItem();
            localStorage.setItem("todolist", JSON.stringify(todo));
        })
    }

    // 统计状态
    countItem = () =>{
        var goto = 0;
        var over = 0;
        var todo = this.state.todo;
        for(var i = 0; i < todo.length; i++){
            if(!todo[i].state){
                goto++;
            }else{
                over++;
            }
        };
        this.setState({
            goto: goto,
            over: over
        })
    }

    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} goto={this.state.goto} over={this.state.over} delTodo={this.delItem} changeTodo={this.changeItem} countTodo={this.countItem}/>
            </div>
        )
    }
}