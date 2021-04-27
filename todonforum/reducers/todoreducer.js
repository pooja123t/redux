let initialState={todo1:"",user:["default value"]}
function Todoreducer(state=initialState,action)
{
	switch(action.type)
	{
		case 'add/todo':
		let newstate={...state,todo1:action.todo1}
        return newstate;

        case 'get/todo':
		let newstate1={...state,todo1:action.user}
        return newstate1;

      default:return state;
	}	
}
export default Todoreducer;