import * as actionTypes from '../comm/actionTypes';

export default function storage(state={},action){
	switch(action.type){
		case actionTypes.FETCH_STOCK_DAY:
			return {...state,...action.data}
		default:
			return state;
	}
}