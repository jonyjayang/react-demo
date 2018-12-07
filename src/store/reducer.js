const defaultState={
    inputValue:'123',
    list:[1,2]
};
export default(state=defaultState,action)=>{
        if(action.type==='change_input'){
            const newState=JSON.parse(JSON.stringify(state));
            newState.inputValue=action.value;
            return  newState;
        }
        if (action.type === 'add_item') {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue)
            newState.inputValue="";
            return newState;
        }
        if (action.type === 'del_item') {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action,1);
            
            return newState;
        }
    return state;
}