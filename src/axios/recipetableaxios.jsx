import axios from "axios"

let url="https://localhost:7012/api/recipeTable/"
export const getall=async()=>{
try{
let data=await axios.get(`${url}getall`)

return data
}
catch(er){
console.log(er)
alert("שגיאה בגישה לשרת"+er)
}
}

export const addrecipe=async(itemadd)=>{
    try{
    let data=await axios.post(`${url}add`,itemadd)
    return data
    }
    catch(er){
    alert("שגיאה בגישה לשרת"+er)
    }
    }
    export const getbycode=async(id)=>{
        try{
        let data=await axios.get(`${url}getbycode`,id)
        return data
        }
        catch(er){
        alert("שגיאה בגישה לשרת"+er)
        }
        }
   
   