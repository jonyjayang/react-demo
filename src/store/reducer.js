const defaultState={
    inputValue:"jonyjayang",
    list:[1,2]
}


export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "change_input_value":
            newState.inputValue=action.value;
            return  newState;
            break;
        case "submit":
            if(newState.inputValue===''){
                alert('值不能为空');
                return newState;
            }
            newState.list.push(newState.inputValue);
            newState.inputValue="";
            return  newState;
            break;
        case "del_input":
            newState.list.splice(action.index,1);
            return  newState;
            break; 
        default:
           
    }
    return state;
}