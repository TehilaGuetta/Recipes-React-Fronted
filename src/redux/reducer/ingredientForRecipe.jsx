import {produce} from 'immer'


export const InitialState={
    //רשימה שתמולא מהשרת
   ingeredientforrecipe:[
       
    ]
}
export const ingrediant=produce((state,action)=>{
    switch(action.type){
  case  'FILL_DATAIFR':state.ingeredientforrecipe=action.payload
    break;
   
    
    }
   },InitialState)