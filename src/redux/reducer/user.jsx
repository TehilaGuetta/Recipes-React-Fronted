import {produce} from 'immer'

export const InitialState={
listuser:[

]
}
export const typeuser=produce((state,action)=>{
    switch(action.type){
  case  'FILL_DATA_USER':state.listuser=action.payload
    break;
    }
   },InitialState)