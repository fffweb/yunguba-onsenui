import * as actionTypes from '../comm/actionTypes';

export function buildMenu(menu){
  return {type:actionTypes.BUILD_MENU,selectedMenu:menu}
}