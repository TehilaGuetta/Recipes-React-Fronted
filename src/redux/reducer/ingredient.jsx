import {produce} from 'immer'


export const InitialState={
    //רשימה שתמולא מהשרת
   ingeredient:[
       
    ]
}
export const ing=produce((state,action)=>{
    switch(action.type){
  case  'FILL_DATAING':state.ingeredient=action.payload
    break;
   
    
    }
   },InitialState)