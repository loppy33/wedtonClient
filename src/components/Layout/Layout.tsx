import './Layout.sass';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { IProps } from "./layout.type"

const Layout: React.FC<IProps> = ({ notify, hiddenIndices }) => {
    const location = useLocation();
    const isTaskPage = location.pathname.startsWith('/task/');

    return (
        <>
            <div className="Layout">
                <div className="notifies">
                {/* <div className={`notify 1`}>Message 0</div> */}
                    {notify.map((message, index) => (
                        <div key={index} className={`notify ${hiddenIndices.includes(index) ? 'hidden' : ''}`}>{message}</div>
                    ))}

                </div>
                <Outlet />
                {!isTaskPage && (
                    <nav>
                        <ul className='container'>
                            <li>
                                <NavLink to="/" end><img src="icons/profile.svg" alt="Profile" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/tasks"><img src="icons/clipboard.svg" alt="Tasks" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/connectWallet"><img src="icons/info.svg" alt="Info" /></NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
};

export default Layout;
