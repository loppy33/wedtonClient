import { TouchEvent, useEffect, useRef, useState } from 'react';
import './Layout.sass';
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const isTaskPage = location.pathname.startsWith('/task/');

    const [isVisible, setIsVisible] = useState(true);
    const [isSwiping, setIsSwiping] = useState(false);
    const [diffX, setDiffX] = useState(0)
    const startX = useRef(0);

    // useEffect(() => {
    //     if ()
    // }, [isVisible])

    // Обработчик начала касания
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (diffX <= 50 || diffX >= -50) {

            setDiffX(0);
        }
    };

    // Обработчик движения касания
    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        const currentX = e.touches[0].clientX;
        setDiffX((currentX - startX.current) / 3);
        console.log(diffX);


        if (diffX >= 50 || diffX <= -50) {
            if (diffX >= 50) {
                setDiffX(150)
            } else {
                setDiffX(-150)
            }
            setIsSwiping(true);

            console.log("swipe");

        }
    };


    return (
        <>
            <div className="Layout">
                <div
                    className="notifies"
                >
                    <div
                        className={`notify ${isSwiping ? 'hidden' : ''}`}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ transform: 'translateX(' + diffX + '%)' }}>
                        Message for user example
                    </div>
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
