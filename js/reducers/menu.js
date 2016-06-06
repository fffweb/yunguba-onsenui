import * as actionTypes from '../comm/actionTypes';

export default function menu(state,action){
	switch(action.type){
		case actionTypes.SET_MENU:
			return action.data;
		default:
			return state;
	}
}