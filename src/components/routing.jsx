import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Addinput } from "./addinput"
import { Addrecipe } from "./addrecipe"
import { Conect } from "./conect"
import { Details } from "./details"
import { Home } from "./home"
import { Nav } from "./nav"
import { Register } from "./register"
import { Userlist } from "./userlist"

export const Routing=()=>{
    return<Routes>
    {/* <Route path="/" element={<Home></Home>}></Route> */}
    <Route path="addrecipe" element={<Addrecipe></Addrecipe>}>
       <Route path="addinput" element={<Addinput></Addinput>}></Route>
    </Route>
    
    <Route path="/conect" element={<Conect></Conect>}></Route>
    
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/datils/:id" element={<Details></Details>}></Route>
    
    <Route path="/userlist" element={<Userlist></Userlist>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
    

}