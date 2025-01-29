import {produce} from 'immer'


export const InitialState={
    //רשימה שתמולא מהשרת
   recipetable:[
       
    ]
}
export const typereducer=produce((state,action)=>{
    switch(action.type){
  case  'FILL_DATA':state.recipetable=action.payload
    break;
   
    
    }
   },InitialState)