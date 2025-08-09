import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './AuthContext';
import logo from "../../assets/logo-main.png";
import noPhoto from "../../assets/default.jpg";
import { toast } from 'react-toastify';
import "./Mycss.css";
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully!');
            })
            .catch(error => {
                console.error(error);
                toast.error('Failed to log out.');
            });
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className="font-normal rounded-[10px]">Home</NavLink></li>
            <li><NavLink to="/foods" className="font-normal rounded-[10px]">All Foods</NavLink></li>
            <li><NavLink to="/foodGallery" className="font-normal rounded-[10px]">Gallery</NavLink></li>
            <li><NavLink to="/about-us" className="font-normal rounded-[10px]">About us</NavLink></li>
            <li><NavLink to="/contact-us" className="font-normal rounded-[10px]">Contact us</NavLink></li>
            
        </>
    );

    const userDropdownLinks = (
        <>
            <li><Link to="/my-foods">My Foods</Link></li>
            <li><Link to="/add-food">Add Food</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
        </>
    );

    return (
        <div className="navbar shadow-sm px-4 sticky top-0 z-50" style={{ backgroundColor: '#e7717d' }}>
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <FaBars className="h-6 w-6" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost p-0">
                        <img src={logo} alt="logo" className="h-12 w-auto" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-base font-medium text-white">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end space-x-2">
                    <label className="swap swap-rotate btn btn-ghost btn-circle text-white">
                        <input type="checkbox" onChange={handleThemeToggle} checked={theme === 'dark'} />
                        <FaSun className="swap-on h-6 w-6 fill-current" />
                        <FaMoon className="swap-off h-6 w-6 fill-current" />
                    </label>

                    {user ? (
                        
                        <div className=" flex gap-4 justify-center items-center">
                            
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar online" title={user?.displayName || 'User'}>
                                <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2 ring-[#004952]">
                                    <img 
                                        src={user?.photoURL || noPhoto} 
                                        alt="user profile"
                                        onError={(e) => { e.target.onerror = null; e.target.src = noPhoto; }}
                                    />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
                                <li className="p-2 font-bold text-center border-b">{user.displayName}</li>
                                <div className="mt-1"></div>
                                {userDropdownLinks}
                                <div className="divider my-1"></div>
                                
                            </ul>
                        </div>
                        <button 
                                        onClick={handleLogout} 
                                        className="btn btn-xs sm:btn-sm md:btn-md rounded-[10px] text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
                                    >
                                        Logout
                                    </button>
                        </div>
                        
                    ) : (
                        <div className="space-x-2">
                            <Link 
                                to="/login" 
                                className="btn btn-xs sm:btn-sm md:btn-md rounded-[10px] text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
                            >
                                Login
                            </Link>
                            <Link 
                                to="/register" 
                                className="btn btn-xs sm:btn-sm md:btn-md rounded-[10px] text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
