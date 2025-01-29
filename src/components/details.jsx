import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getingredientbycode } from "../axios/ingredientForRecipeaxios"
import { FillDataifr } from "../redux/action/ingredientForRecipeaction"

export const Details=()=>{
    debugger
let param=useParams()
const[data,setdata]=useState([])//ing

let f=useSelector(s=>s.typereducer.recipetable)//rcepy

let t=useSelector(r=>r.ingrediant.ingeredientforrecipe)//in
let dis=useDispatch()

async function details(){
    // if(t.length>0)
    //setdata(t)
   // else{
        let data=await getingredientbycode(param.id)
        setdata(data.data)
        dis(FillDataifr(data.data))
   // }
    

}
useEffect(()=>{
    details();
    
},[])


    return<div className="container">{f.filter(a=>a.codeRecipe==param.id).map(r=><div><p style={{fontSize:"30px"}}> :מקור המתכון {r.userName} {r.family} <br></br> {r.name} {r.descrebtion} רמת קושי:  {r.levelRecipe} <br></br>זמן הכנה:  {r.time} כמות:  {r.count}  הוראות הכנה: {r.instraction}</p>
     <br></br> <img src={`https://localhost:7012/pic/${r.img}`} with={"500px"} height={"500px"} ></img></div>) }
   <p style={{fontSize:"30px"}}>רשימת רכיבים</p>{data.map(m=><p style={{fontSize:"30px"}}> {m.ingedientName}  {m.amount}</p>)}
    </div>
}


