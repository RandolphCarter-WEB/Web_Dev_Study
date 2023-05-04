import {Link, Outlet} from "react-router-dom";

export default function Intro() {
    return (
        <div>
            <h1>Intro Site</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}