import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './ActionTypes'

const defaultState={
    inputValue:'123',
    list:[]
};
export default(state=defaultState,action)=>{
        if(action.type===CHANGE_INPUT_VALUE){
            const newState=JSON.parse(JSON.stringify(state));
            newState.inputValue=action.value;
            return  newState;
        }
        if(action.type===INIT_LIST_ACTION){
            const newState=JSON.parse(JSON.stringify(state));
            // console.log(newState);
            newState.list=action.data;
            return  newState;
        }
        if (action.type === ADD_TODO_ITEM) {
            const newState = JSON.parse(JSON.stringify(state));
            if(newState.inputValue===''){
                alert('值不能为空');
                return newState;
            }
            newState.list.push(newState.inputValue);
            newState.inputValue="";
            return newState;
        }
        if (action.type === DELETE_TODO_ITEM) {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index,1);
            return newState;
        }
    return state;
}