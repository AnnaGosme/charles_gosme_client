import { Link } from "react-router-dom";
// npm install --save-dev @iconify/react @iconify-icons/fa-solid
import { Icon, InlineIcon } from '@iconify/react';
import usersCog from '@iconify-icons/fa-solid/users-cog';


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
           <Link to="/tracks"><Icon className="admin-cog" icon={usersCog} /> </Link> 
           </div>
        </div>
    )
}
