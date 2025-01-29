import axios from "axios"

let url="https://localhost:7012/api/ingredient/"
export const getalling=async()=>{
    debugger
try{
let data=await axios.get(`${url}getall`)

return data
}
catch(er){
console.log(er)
alert("שגיאה בגישה לשרת"+er)
}
}

//הוספה
export const add=async(typeToAdd)=>{
    try{
        
        let data=await axios.post(`${url}add`,typeToAdd)
        return data
    }
    catch(er){
        alert("שגיאה בגישה לשרת"+er)
    }
    }