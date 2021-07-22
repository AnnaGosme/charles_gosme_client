import { Link } from "react-router-dom"

import Nav from "./Nav"

export default function Home() {
    return (
        <div className="home">
            <div className="charles-gosme-title">
            <h1>Charles Gosme</h1>
            </div>
            <div className="nav-bar">
            <Nav />
            </div>
            <div className="link">
           <Link to="/tracks"><button className="btn btn-big admin-btn">Administrator's Page</button></Link> 
           </div>
        </div>
    )
}
