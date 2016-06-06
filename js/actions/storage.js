import * as actionTypes from '../comm/actionTypes';
const STORAGE_KEY = 'localStorage';

export function loadStorage(){
		let ls=localStorage.getItem(STORAGE_KEY);
		if(ls){
			dispatch({type:actionTypes.SET_STORAGE,data:JSON.parse(ls)});
		}else{
			dispatch({type:actionTypes.SET_STORAGE,data:{favors:['sh000001','sz399001']}});
			//dispatch(save());
		}
}

export function saveStorage(){
	let data=getState().storage;
	data.updateDate=new Date();
	localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}
