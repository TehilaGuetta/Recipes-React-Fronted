import { useEffect } from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getalluser, getbynameandpass } from "../axios/useraxios"
import usercontext from "../usercontext"

export const Conect=()=>{
let obj={}
const [user,setuser]=useState("")
const [data,setdata]=useState([])
let con=useContext(usercontext)
let nav=useNavigate()
// let flag=0;
// async function conectuser(){
//     if(con.listuser.length>0)
//     setdata(con.listuser)
//     else{
//         let result=await getalluser()
//         con.setlistuser=result.data
//         setdata(result.data)
//     }
    
// }
// useEffect(()=>{
//     conectuser();
// },[])

async function  send(){
    // if(user.userName==con.managername && user.password==con.managerpass){
    //          con.setismanager(false)
    //          con.setcanadd(false)
    //          obj={
    //                 "userName":con.managername,
    //                 "family":"כהן",
    //                 "email":"ac@gmail.com", 
    //                 "password":con.managerpass
    //         }
    //         con.setcurrentuser(obj)
    //          alert("manager")
    //          nav("../userlist")
    // }else
         
    let res=await getbynameandpass(user.userName,user.password)
    
            if(res.data.userName==user.userName){
            // obj={
            //     "userName":user.userName,
            //     "family":res.data.family,
            //     "email":res.data.email, 
            //     "password":user.password
            // }
            // con.setcurrentuser(obj)
            con.setcurrentuser(res.data)
            con.setcanadd(false)
            con.setismanager(false)
            if(user.userName==con.managername && user.password==con.managerpass){
            alert("manager")
            nav("../userlist")
            
            }
            else{
            alert("connect")
             nav("../addrecipe")
            } }
            else{
            nav("../register")  
            }
       
}
//         for(let i=0;i<data.length;i++){
     
//         if(user.userName==con.managername && user.password==con.managerpass){
//             flag=1
//             con.setismanager(false)
//             con.setcanadd(false)
//            obj={
//                 "userName":con.managername,
//                 "family":"כהן",
//                  "email":"ac@gmail.com", 
//                  "password":con.managerpass
//             }
//             con.setcurrentuser(obj)
//             alert("manager")
//              nav("../userlist")
//             break }
//         if(data[i].userName==user.userName&&data[i].password==user.password){
//             flag=1
//             debugger
//             obj={
//                 "userName":data[i].userName,
//                 "family":data[i].family,
//                  "email":data[i].email, 
//                  "password":data[i].password
//             }
//         con.setcanadd(false)
//         con.setcurrentuser(obj)
//         alert("connect")
//         nav("../addrecipe")
//         break
//         }
//           }
//  if(flag==0){
//     nav("../register")}} 



    return<div><input placeholder="name"onChange={(e)=>setuser({...user,userName:e.target.value})}></input>
    <input placeholder="password"onChange={(e)=>setuser({...user,password:e.target.value})}></input>
    <button onClick={()=>send()}>connect</button></div>

}