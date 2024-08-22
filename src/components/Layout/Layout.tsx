import './Layout.sass';
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    
    // Проверяем, находится ли пользователь на странице /task/:id
    const isTaskPage = location.pathname.startsWith('/task/');

    return (
        <>
            <div className="Layout">
                <Outlet />
                {!isTaskPage && ( 
                    <nav>
                        <ul className='container'>
                            <li>
                                <NavLink to="/" end><img src="icons/profile.svg" alt="" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/tasks"><img src="icons/clipboard.svg" alt="" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/connectWallet"><img src="icons/info.svg" alt="" /></NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
};

export default Layout;
