import { useContext, useState } from "react"
import { getalling } from "../axios/ingredientaxios"
import { FillDataing } from "../redux/action/ingredientaction"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import usercontext from "../usercontext"
import { useDispatch } from "react-redux"
export const Addinput=()=>{
const[ingedients,setingedients]=useState({})
const dis=useDispatch()
let listing=[]
let a=0
let con =useContext(usercontext)
const nav=useNavigate()
// let listing=[]
let f=useSelector(s=>s.ing.ingeredient)
    const sending=async()=>{
    debugger
        if(f.length>0)
        // setlisting(f)
        listing=f
           else{
             let res=await getalling()
            //  setlisting(res.data)
            listing=res.data
             dis(FillDataing(res.data))
           }
    
    //a=listing.filter(e=>e.ingedientName==ingedients.ingedientName)!=null?.id
    // a=listing.filter(e=>e.ingedientName==ingedients.ingedientName)
    for(let i=0;i<listing.length;i++)
    {
        if(listing[i].ingedientName==ingedients.ingedientName){

             a=listing[i].id
            break
        }  
    }
    console.log(a);
    let ing={
        "codeIngredientRecipe": 0,
        "codeRecipe": con.coderecipe,
        "codeIngredient": a,
        "amount": ingedients.amount,
        "ingedientName":ingedients.ingedientName
    }
    debugger
    con.list.push(ing)
    
    
     }
    return<div>
    <input type={'text'} className="form-control" placeholder={'הכנס שם רכיב'}onChange={(e)=>setingedients({...ingedients,ingedientName:e.target.value})}></input>
    <input type={'text'} className="form-control" placeholder={'הכנס כמות'}onChange={(e)=>setingedients({...ingedients,amount:e.target.value})}></input>
    <button onClick={()=>sending()}> הוסף את הרכיב</button>
  {/* <Link to={"addrecipe"}>הוסף</Link> */}
    </div>
}