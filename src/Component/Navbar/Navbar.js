import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  const navLinks = [
    { href: "#", icon: <AiOutlineHome /> },
    { href: "#about", icon: <AiOutlineUser /> },
    { href: "#experience", icon: <BiBook /> },
    { href: "#projects", icon: <RiServiceLine /> },
    { href: "#contact", icon: <BiMessageSquareDetail /> },
  ];

  return (
    <nav>
      {navLinks.map((link, index) => (
        <a
          key={index}
          onClick={() => setActive(link.href)}
          className={active === link.href ? "active" : ""}
          href={link.href}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
