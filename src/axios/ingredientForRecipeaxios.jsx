
import axios from "axios"
let url="https://localhost:7012/api/IngredientForRecipe/"

export const getallIngredientForRecipe=async()=>{
try{
let data=await axios.get(`${url}getall`)

return data
}
catch(er){
console.log(er)
alert("שגיאה בגישה לשרת"+er)
}
}

export const getingredientbycode=async(id)=>{
    try{
        
        let data=await axios.get(`${url}getingredientbycode/${id}`,id)
        return data
    }
    catch(er){
        alert("שגיאה בגישה לשרת"+er)
    }
 }
 export const addlistingredient=async(list)=>{
    try{
        debugger
        let data=await axios.post(`${url}addlistingredient`,list)
        return data
    }
    catch(er){
        alert("שגיאה בגישה לשרת"+er)
    }
 }
