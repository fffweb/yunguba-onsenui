import * as actionTypes from '../comm/actionTypes';

const allMenu=[
  {name:'favors',title:'自选股'},
  {name:'increase',title:'涨幅榜'},
  {name:'decline',title:'跌幅榜'},
  {name:'about',title:'关于'},
];

export default function menu(state=[],action){
	switch(action.type){
		case actionTypes.BUILD_MENU:
			let menu=allMenu.filter(x=>x.name!==action.selectedMenu.name);
			return menu;
		default:
			return state;
	}
}