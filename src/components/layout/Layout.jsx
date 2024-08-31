import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

const Layout = () => {
    const [theme,setTheme] = useState("light");
    const themeValue = window.localStorage.theme;
    useEffect(() => {
        if (themeValue === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    },[themeValue]);
    useEffect(() => {
        window.localStorage.theme = theme;
    },[theme]);
    const handleChange = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    };
  return (
    <ThemeContext.Provider value={theme}>
        <Navbar onThemeChange={handleChange}/>
        <Outlet />
    </ThemeContext.Provider>
  );
};

export default Layout;