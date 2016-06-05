function getScript(url){
  let promise = new Promise(function(resolve, reject){
    var elem=document.createElement('script'),
        handler=function(e){
          elem.parentNode.removeChild(elem);
          handler=null;
          if ( e && e.type === "error") {
            reject(e.type);
          }
          resolve(e.type);
        };
    elem.src=url;
    elem.charset='gb2312';
    elem.addEventListener('load',handler);
    elem.addEventListener('error',handler);
    document.head.appendChild(elem);
  });
  return promise;
}

let service={
	stock:{
		fetchDay:function(codes){
			let url='http://qt.gtimg.cn/q='+codes.join(',')+',';
   		return getScript(url);
			//  .then(()=>{
      // 	codes.forEach(code=>{
      //     var varName='v_'+code;
      //     if(window[varName]){
      //       var values=window[varName].split('~');
      //       window[varName]=null;
			// 			const date=new Date();
      //       var v={
      //         code:code,name:values[1],
      //         close:parseFloat(values[3]),
      //         last:parseFloat(values[4]),
      //         open:parseFloat(values[5]),
      //         volume:parseInt(values[6]),
      //         buy1:values[9],buy1Vol:values[10],
      //         buy2:values[11],buy2Vol:values[12],
      //         buy3:values[13],buy3Vol:values[14],
      //         buy4:values[15],buy4Vol:values[16],
      //         buy5:values[17],buy5Vol:values[18],
      //         sell1:values[19],sell1Vol:values[20],
      //         sell2:values[21],sell2Vol:values[22],
      //         sell3:values[23],sell3Vol:values[24],
      //         sell4:values[25],sell4Vol:values[26],
      //         sell5:values[27],sell5Vol:values[28],
      //         time:moment(values[30],'YYYYMMDDHHmmss').toDate(),
			// 				high:values[33],low:values[34],
      //         amount:parseInt(values[37]),
      //         turnoverRate:values[38],
			// 				date
      //       };
			// 			procStock(v);
			// 			if(code==='sh000001' || code.slice(0,5)==='sz399'){
			// 			  v.avg=parseFloat(values[35].split('/')[0]);
      //       }else{
      //         v.avg=(v.amount/v.volume*100);//.toFixed(2);
      //       }
			// 			//debugger
			// 			this._data[code]=Object.assign(this._data[code]||{},v);
      //     }
      //   });
				
      // });
		},
		fetchMinData:function(code){
			const url='http://data.gtimg.cn/flashdata/hushen/minute/'+code+'.js';
			return fetch(url);
		},
		fetchDKData:function(code){
			const url='http://data.gtimg.cn/flashdata/hushen/latest/daily/'+code+'.js?maxage=43201';
			return fetch(url);
		},
		fetchMKData:function(code){
			
		}
		
	}
}

export {service};