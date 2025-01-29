import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getall } from "../axios/recipetableaxios"
import { FillData } from "../redux/action/recipetableaction"

export const Home=()=>{
const nav=useNavigate()
const [data,setdata]=useState([])
let f=useSelector(k=>k.typereducer.recipetable)
let dis=useDispatch()
async function  fetchData() {
    debugger
    if(f.length>0)
    setdata(f)
    else{

        let dataFromServer=await getall()
        setdata(dataFromServer.data)
        dis(FillData(dataFromServer.data))
    }}
    useEffect(()=>{
        fetchData();
    },[])
    

    return<div className="con"><div  className="container-fuild mt-3 row">{data.map(l=>(<div className="card col-sm-2" style={{margin: "10px"}}>
    <p class="card-title"> {l.name}</p>
    <p>{l.levelRecipe}</p>
    <img src={`https://localhost:7012/pic/${l.img}`} height="300"></img> 
    <button onClick={()=>nav(`../datils/${l.codeRecipe}`)}>פרטים נוספים</button></div>))}</div></div>
}


