import { combineReducers } from "redux";
import {typereducer} from './reducer/recipetable.jsx'
import {typeuser} from './reducer/user.jsx'
import {ingrediant} from './reducer/ingredientForRecipe.jsx'
import {createStore} from 'redux'; 
import {ing} from './reducer/ingredient.jsx'
//שיש כמה רדוסרים 
// export const reducer=combineReducers({typereducer},{typeuser})

const reducers = combineReducers({
    typeuser: typeuser,
    typereducer: typereducer,
    ingrediant:ingrediant,
    ing:ing
   })
   export const store=createStore(reducers)
window.store=  store