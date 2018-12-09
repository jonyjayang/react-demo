import React, { Component } from 'react';
import store from './store/index'
import TodoListUi from './store/TodoListUi'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from  './store/ActionCreater'
import axios from 'axios'

class Todolist2 extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.stroechange = this.stroechange.bind(this);
        store.subscribe(this.stroechange);
        this.handleClick=this.handleClick.bind(this);
        this.handleDel=this.handleDel.bind(this);
      
    }
    render(){
        return(
          <TodoListUi inputValue={this.state.inputValue}
            list={this.state.list}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleDel={this.handleDel}
          ></TodoListUi>
        )
    }
    componentDidMount(){
        const action=getTodoList();
        store.dispatch(action);
    }
    handleChange(e){
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action);

    }
    stroechange(){
        this.setState(store.getState());
    }
    handleClick(){
        const action=getAddItemAction()
           store.dispatch(action);
    }
    handleDel(index){
        const action=getDeleteItemAction(index)
         store.dispatch(action);
        // console.log(index);
    }
}
export default Todolist2;
