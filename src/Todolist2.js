import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button,List} from 'antd';
import store from './store/index'

class Todolist2 extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.stroechange = this.stroechange.bind(this);
        store.subscribe(this.stroechange);
        this.handleClick.bind(this);
      
    }
    render(){
        return(
            < div style = {
                {
                    marginLeft: '30px',
                    marginTop: '10px'
                }
            } >
                < Input placeholder = "Basic usage" style={{width:'300px',marginRight:"20px"}}
                 onChange={this.handleChange} 
                value={this.state.inputValue} /> 
               < Button type = "primary"  onClick={this.handleClick} > Primary </Button>
             < List dataSource = {this.state.list} renderItem = {(item,index) => ( < List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)} style={{marginTop:'10px',width:'300px'}} />
            </div>
        )
    }
    handleChange(e){
        const action={
            type:'change_input',
            value:e.target.value
        }
        store.dispatch(action);

    }
    stroechange(){
        this.setState(store.getState());
    }
    handleClick(){
        const action={
            type:'add_item',
            
        }
           store.dispatch(action);
    }
    handleDel(index){
        const action={
            type:'del_item',
            index:index
        }
         store.dispatch(action);
        // console.log(index);
    }
}
export default Todolist2;
