import './Layout.sass'
import { Outlet, NavLink } from "react-router-dom";


const Layout = () => { 
    return (
        <>
            <div className="Layout">
                <Outlet />
                <nav>
                    <ul className='container'>
                        {/* <li>
                            <Link to="/" end>Home</Link>
                        </li> */}
                        {/* <li>
                            <NavLink to="/friends" end><img src="icons/profile.svg" alt="" /></NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/" end><img src="icons/profile.svg" alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/tasks" ><img src="icons/clipboard.svg" alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/connectWallet"><img src="icons/info.svg" alt="" /></NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
};

export default Layout;