import { useContext } from "react"
import { Link } from "react-router-dom"
import usercontext from "../usercontext"

export const Nav=()=>{
    let con=useContext(usercontext)
    return <div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
   
        <a className="navbar-brand" href="#">recipe </a>
        <a className="navbar-brand" href="#" hidden={con.canadd}>מחובר {con.currentuser.userName} {con.currentuser.family}</a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">

                    <Link className="nav-link" to={'addrecipe'}  hidden={con.canadd}>add recipe</Link>
                </li>
               {/* <li className="nav-item">
                    <Link className="nav-link" to={'datils'}> details</Link>
                </li>  */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to={'register'}> register</Link>
                </li>  */}
                <li className="nav-item">
                    <Link className="nav-link" to={'userlist'} hidden={con.ismanager}> userlist</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to={'conect'}>conect</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to={'home'} >home  </Link>
                </li> 
            </ul>
        </div>
    </nav>
</div>
}