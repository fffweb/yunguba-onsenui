import * as actionTypes from '../comm/actionTypes';

export default function storage(state={
	updateDate:null,
	favors:[]
},action){
	switch(action.type){
		case actionTypes.SET_STORAGE:
			return action.data;
		default:
			return state;
	}
}