import { useState } from "react"
import { useContext } from "react"
import { adduser, getbynameandpass } from "../axios/useraxios"
import usercontext from "../usercontext"
// import { getalluser } from "../axios/useraxios"
export const Register=()=>{
const con=useContext(usercontext)
const [user,setuser]=useState({})

// const det=async()=>{
//     if(con.currentuser==null){
//       let res=await getalluser()
//         con.setlistuser(res.data)
//     }  
// }
// useEffect(()=>{
//     det();
// },[])

const send=async()=>{
    
let obj={
    "id":0,
    "userName":user.userName,
    "family":user.family,
    "email":user.email,
    "password":user.password
}
let result=await adduser(obj)
 if(result.data==true){
   
    
    con.setcanadd(false)
     alert("succes")
    let res=await getbynameandpass(user.userName,user.password)
    con.setcurrentuser(res.data)
     }
else{
    alert(" didnt succes") 
}

}

    return<div className="form-group container"><input className="form-control" placeholder="input pass"onChange={(e)=>setuser({...user,password:e.target.value})}></input><br></br>
    <input className="form-control" placeholder="input name"onChange={(e)=>setuser({...user,userName:e.target.value})}></input><br></br>
    <input className="form-control"placeholder="input family"onChange={(e)=>setuser({...user,family:e.target.value})}></input><br></br>
    <input className="form-control"type={'email'}placeholder="input mail" onChange={(e)=>setuser({...user,email:e.target.value})}></input>
    <button onClick={()=>send()}>send</button>
    </div>
}
