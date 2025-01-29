import { useContext } from "react"
import { useEffect, useState } from "react"
import { getalluser } from "../axios/useraxios"
import usercontext from "../usercontext"
export const Userlist=()=>{
const[userlist1,setuserlist1]=useState([])
let con=useContext(usercontext)
async function getuser(){
if(con.listuser.length>0)
setuserlist1(con.listuser)
else{
    let data=await getalluser();
    con.setlistuser(data.data)
    setuserlist1(data.data)
}
 }
useEffect(()=>{
    getuser();
},[])
    return<div>
        {userlist1.map(a=>(<p>   {a.email}   {a.password}   {a.family} {a.userName} </p>))}</div>
}