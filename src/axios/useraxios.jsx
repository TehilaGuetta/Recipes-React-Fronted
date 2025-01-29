import axios from "axios"

let url="https://localhost:7012/api/user/"
export const getalluser=async()=>{
try{
let data=await axios.get(`${url}getall`)
return data
}
catch(er){
console.log(er)
alert("שגיאת שרת"+er)
}
}
export const adduser=async(toadd)=>{
    try{
    let data=await axios.post(`${url}add`,toadd)
    return data
    }
    catch(er){
    console.log(er)
    alert("שגיאת שרת"+er)
    }}
    export const getbynameandpass=async(name,pass)=>{
        try{
        let data=await axios.get(`${url}getbymailandpass/${name}/${pass}`)
        return data
        } 
        catch(er){
        console.log(er)
        alert("שגיאת שרת"+er)
        }}
    

