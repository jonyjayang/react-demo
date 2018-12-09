import React, { Component,Fragment } from 'react';
// import store from './store';
import {connect} from 'react-redux';
 


const TodoList3=(props)=>{
    const { inputValue,handleChange,hanleDel,handleClick,list}=props;

        return(
        <Fragment>
            <div>
                <input value={inputValue} onChange={handleChange}></input>
                <button onClick={handleClick}>提交</button>
            </div>
            <div>
                <ul>
                   {
                     (list||[]).map((item,index)=>{
                        return <li key={index} onClick={hanleDel.bind(index)} >{item}</li>
     
                     })
                   }
                </ul>
            </div>
        </Fragment>
        ) 
    
}
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }

};
//store.dispatch
const mapDispatchToProps=(dispatch)=>{
    return {
        handleChange(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            };
            dispatch(action);
        },
        handleClick(){
            const action={
                type:'submit'
            };
            dispatch(action);
        },
        hanleDel(index){
            const action={
                type:'del_input',
                index:index
            }
            dispatch(action);
        }
       
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList3);
export default VisibleTodoList;