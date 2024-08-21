import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <Outlet />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/friends">Friends</Link>
                    </li>
                </ul>
                    <li>
                        <Link to="/connectWallet">Connect Wallet</Link>
                    </li>
            </nav>
        </>
    )
};

export default Layout;