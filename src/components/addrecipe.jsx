// import { async } from "q"
import { useContext } from "react"
import { useState } from "react"
// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
// import { getalling } from "../axios/ingredientaxios"
 import { addlistingredient } from "../axios/ingredientForRecipeaxios"
import { addrecipe, getall } from "../axios/recipetableaxios"
// import { FillDataing } from "../redux/action/ingredientaction"
import { FillData } from "../redux/action/recipetableaction"
import usercontext from "../usercontext"
export const Addrecipe=()=>{
const [recipe,setrecipe]=useState({})

// const[ingedients,setingedients]=useState({})
let con =useContext(usercontext)
let dis=useDispatch()
let result
//let idrecipe=101
const[idrecipe,setidrecipe]=useState()
// let a=0
// const list=[]
// const[list,setlist]=useState([])
// const[listing,setlisting]=useState()
const nav=useNavigate()

// הוספת מתכון
// ______________________________________

const send=async()=>{

let obj={
    "codeRecipe": 0,
    "name": recipe.name,
    "descrebtion": recipe.descrebtion,
    "levelRecipe": recipe.levelRecipe,
    "time": recipe.time,
    "count": recipe.count,
    "instraction": recipe.instraction,
    "idUser": con.currentuser.id,
    "img": recipe.img,
    "userName": con.currentuser.userName,
    "family": con.currentuser.family,
    "email": con.currentuser.email,
    "password": con.currentuser.password
}

  debugger
 result= await addrecipe(obj)
  if(result.data!=0)
          {
            setidrecipe(result.data)
            con.coderecipe=result.data
        alert("נוסף בהצלחה")
        let datafromserver=await getall()
            //תעדכן את הרידקס
        dis(FillData(datafromserver.data))
         
        console.log(idrecipe);
          }
}


 
 const end=async()=>{
    debugger
    let resu=await addlistingredient(con.list)
    if(resu.data==true){
        alert("add")
    }
 }
const go=()=>{

    nav('../addrecipe')
}

    return<div className="form-group container">
         <input type={'text'} className="form-control" placeholder={'הכנס את שם המתכון'} onChange={(e)=>setrecipe({...recipe,name:e.target.value})}></input><br></br>
         <input type={'text'}className="form-control" placeholder={'תאור'} onChange={(e)=>setrecipe({...recipe,descrebtion:e.target.value})}></input><br></br>
         <input type={'text'} className="form-control"placeholder={'זמן ההכנה'} onChange={(e)=>setrecipe({...recipe,time:e.target.value})}></input><br></br>
         <input type={'number'}className="form-control" placeholder={'כמות מנות'} onChange={(e)=>setrecipe({...recipe,count:e.target.value})}></input><br></br>
         <input type={'text'} className="form-control"placeholder={'הוראות הכנה'} onChange={(e)=>setrecipe({...recipe,instraction:e.target.value})}></input><br></br>
         <input type={'text'} className="form-control"placeholder={'שם תמונה'} onChange={(e)=>setrecipe({...recipe,img:e.target.value})}></input><br></br>
         <label>רמת קושי</label>
         <select className="form-control"  onChange={(e)=>setrecipe({...recipe,levelRecipe:e.target.value})}>
            <option value={"קשה"}>קשה</option>
            <option value={"בינוני"}>בינוני</option>
            <option value={"קל"}>קל</option>
         </select><br></br>
          <button onClick={()=>send()}>הוסף את המתכון</button>
          <br></br>
          <br></br>
          <div>
    {/* <p>רשימת רכיבים</p> */}
    
    
    <Link to={'addinput'}>לחץ להוספת רכיבים למתכון  </Link>
    <Outlet></Outlet>
    {/* <div id="in"></div> */}
    <button onClick={()=>go()}>להוספת רכיב נוסף</button>
    <button onClick={()=>end()}>לחץ לסיום הכנסת הרכיבים</button>
</div>
    </div>
} 



