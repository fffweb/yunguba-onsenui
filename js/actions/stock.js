import * as actionTypes from '../comm/actionTypes';
import {service} from '../comm/service';

function dayData(code,line){
	let values=line.split('~');
  let v={
		code:code,
		name:values[1],
    close:parseFloat(values[3]),
    last:parseFloat(values[4]),
    open:parseFloat(values[5]),
    volume:parseInt(values[6]),
    buy1:values[9],buy1Vol:values[10],
    buy2:values[11],buy2Vol:values[12],
    buy3:values[13],buy3Vol:values[14],
    buy4:values[15],buy4Vol:values[16],
    buy5:values[17],buy5Vol:values[18],
    sell1:values[19],sell1Vol:values[20],
    sell2:values[21],sell2Vol:values[22],
    sell3:values[23],sell3Vol:values[24],
    sell4:values[25],sell4Vol:values[26],
    sell5:values[27],sell5Vol:values[28],
    time:values[30],high:values[33],low:values[34],
    amount:parseInt(values[37]),
    turnoverRate:values[38]
  };
  if(code==='sh000001' || code==='sz399001'){
  	v.avg='';
  }else{
    v.avg=(v.amount/v.volume*100).toFixed(2);
  }
	return v;
}

export function fetchDay(codes){
	return (dispatch,getState)=>{
		service.stock.fetchData(codes).then(res=>{
			let stocks={};
			let data=res._bodyText.split('\n');
			data.forEach(line=>{
				if(line.length<10)	return;
				let code=line.slice(2,10);
				stocks[code]=stocks[code]||{};
				stocks[code]=Object.assign(stocks[code],dayData(code,line));
			});
			dispatch({type:actionTypes.FETCH_STOCK_DATA,data:stocks});
		});
	}
}

export function fetchMinutes(code){
	return (dispatch,getState)=>{
		service.stock.fetchMinData(code).then(res=>{
			debugger;
			let data=res._bodyText;
			
		});
	}
}

export function fetchDayK(code){
	return (dispatch,getState)=>{
		
	}
}