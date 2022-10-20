import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-2xl text-green-500">SK PRODUCTION</Link>
                </div>
                <div className="flex-none">
                    <div className="menu menu-horizontal p-0">
                        {/* <li> */}
                        {user?.email && <span className='mt-3'>Welcome {user.email}</span>}
                        {/* </li> */}

                        {/* <li> */}
                        <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                        {/* </li> */}
                        <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
                        {/* <li> */}
                        {
                            user?.email ?
                                <button onClick={handleLogOut} className="btn btn-error normal-case text-xl text-white">Logout</button>
                                : <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                        }
                        {/* </li> */}
                        {/* <li> */}
                        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                        {/* </li> */}
                        {/* <button onClick={handleLogOut} className="btn btn-sm btn-error mt-3">Logout</button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;