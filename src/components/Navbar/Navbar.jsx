import { useContext, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Add-product',
        href: '/add-product',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
];
function Navbar({onThemeChange}) {
    let location = useLocation();
    const [isNavOpen,setIsNavOpen] = useState(false);
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    const theme = useContext(ThemeContext);
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.scrollTo({
                top: 0,
            });
        }
    },[location.pathname]);
  return <header className="dark:bg-black dark:text-white border-b-[2px] border-b-slate-200 py-4">
        <nav className="container flex justify-between items-center">
            <div className="font-semibold text-blue-400 text-2xl">re:<span className="dark:text-white">commerce</span></div>
            <ul className={`fixed md:static transition-all duration-500 ease-in-out top-0 p-12 z-10 md:justify-end backdrop-blur-md dark:bg-black w-1/2 h-full flex flex-col md:flex-row md:p-0 md:items-center gap-4 text-xl ${isNavOpen ? 'right-0' : '-right-full'}`}>
                {links.map((link) => (
                    <li className="hover:text-blue-400" key={link.href}>
                        <Link className={location.pathname === link.href ? 'opacity-100 md:border-b-[6px] md:border-b-black hover:text-blue-400 md:hover:border-b-blue-400' : 'opacity-40 hover:text-blue-400 hover:opacity-100'} to={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleNavToggle} className="bg-black dark:bg-black border-white dark:border-white z-20 fixed right-4 mt-auto flex md:hidden text-white py-3 px-4 rounded-3xl border-[2px] hover:border-black hover:bg-white hover:text-black">
                {isNavOpen ? <FaX /> : <FaBars /> }
            </button>
            <button onClick={onThemeChange} className="flex capitalize text-lg dark:border-white font-medium gap-2 items-center border-[2px]  rounded-3xl py-2 px-5 shadow-xl hover:bg-black hover:text-white">
                {theme} {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
        </nav>
    </header>;
};

export default Navbar;