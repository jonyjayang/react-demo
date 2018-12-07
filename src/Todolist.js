import React,{ Component,Fragment } from 'react';

class Todolist extends Component{
   constructor(props){
       super(props)
       this.state={
           inputValue:"",
           list:["吃饭","睡觉","打dota"]
       }

   }
   render(){
       return (
        <Fragment>
            <div>Todolist</div>
            <label htmlFor="content"></label>
            <input  value={this.state.inputValue} onChange={this.handleInputchange.bind(this)} id="content"/>
            <button onClick={this.buttonClick.bind(this)}>提交</button>
            {/* 需要使用bind来对this进行重新指向 */}
            <ul>
            {
                this.state.list.map((item,index)=>{
                   return <li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>

                })
            }
            </ul>
        </Fragment>
       )
   }
   handleInputchange(e){
       //更改state里面的状态值需要使用setState方法
       this.setState({
           inputValue:e.target.value
       })

   }
   buttonClick(){
       this.setState({
           list:[...this.state.list,this.state.inputValue],
           inputValue:''
       })
   }
   handleDel(index){
       const list=[...this.state.list];
       list.splice(index,1)
       this.setState({
           list:list
       })

   }
}
export default Todolist;