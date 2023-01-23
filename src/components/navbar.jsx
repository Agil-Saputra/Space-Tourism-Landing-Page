import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react'
// ASSETS
import logo from "../assets/shared/logo.svg";
import { RiCloseFill } from "react-icons/ri"
import { GoThreeBars } from "react-icons/go"


export default function navbar() {
    const link = "md:py-10 py-8 relative before:content-[''] before:absolute before:w-full before:h-[3px] hover:before:bg-hover before:bottom-0 before:left-0"
    const [show, setShow] = useState(false)

    function handleClick() {
        setShow(!show)
    }

  return (
    <>
      <nav className="flex items-center justify-between absolute w-full 
      text-white md:pl-14 md:py-14 py-4 p-6 md:p-0">
        <img src={logo} alt="Logo" className="w-12 h-12"/>
        <ul className={(show ? "right-0"  : "-right-full") + " flex md:gap-12 md:flex-row flex-col lg:px-28 backdrop-blur-[81.5px] px-8 max-md:h-full max-md:fixed top-0 md:pt-0 pt-16 font-barlow-cond tracking-[2.7px] before:w-[400px] before:content-[''] before:absolute before:-left-[370px] before:h-[0.5px] before:bg-hover before:top-[50%] before:max-xl:hidden before:opacity-25 transition-all duration-300 ease-in-out"}>
          <NavLink to="/" className={link}><strong>00</strong> HOME</NavLink>
          <NavLink to="/destination" className={link}><strong>01</strong>  DESTINATION</NavLink>
          <NavLink to="/crew" className={link}><strong>02</strong>  CREW</NavLink>
          <NavLink to="/technology" className={link}><strong>03</strong>  TECHNOLOGY</NavLink>
        </ul>
        {show ? <RiCloseFill onClick={handleClick} className="z-10 md:hidden block" size={30}/> : <GoThreeBars className="z-10 md:hidden block" size={30} onClick={handleClick}/>}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
