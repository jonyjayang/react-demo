import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,List} from 'antd';
class TodoListUi extends Component{
    render(){
        return(
            <Fragment>
    < div style = {
                {
                    marginLeft: '30px',
                    marginTop: '10px'
                }
            } >
                < Input placeholder = "Basic usage" style={{width:'300px',marginRight:"20px"}}
                 onChange={this.props.handleChange} 
                value={this.props.inputValue} /> 
               < Button type = "primary"  onClick={this.props.handleClick} > Primary </Button>
             < List dataSource = {this.props.list} renderItem = {(item,index) => ( < List.Item onClick={()=>{this.props.handleDel(index)}}>{item}</List.Item>)} style={{marginTop:'10px',width:'300px'}} />
            </div>
            </Fragment>
        )
    }
}
export default TodoListUi;
