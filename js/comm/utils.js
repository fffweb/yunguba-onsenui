var moment=require('moment');

export function isOpening(){
  let d=new Date(),day=d.getDay();
  if(day>0 && day<6){
    let start=moment({hour: 9, minute: 15}),
        end=moment({hour:15,minutes:15}),
        now = moment();
    if(now>start && now<end){
      return true;
    }
  }
  return false;
}
