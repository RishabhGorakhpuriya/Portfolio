import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";

const list = [{ name: "Home", link: "#" },
{ name: "About", link: "#about" },
{ name: "Experience", link: "#experience" },
{ name: "Project", link: "#projects" },
{ name: "Contact", link: "#contact" }]

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/rishabh-gorakhpuriya-46bb57218/",
        icon: <FaLinkedin />,
    },
    {
        href: "https://github.com/RishabhGorakhpuriya",
        icon: <FaGithub />,
    },
    {
        href: "https://leetcode.com/u/RishabhGorakhpuriya/",
        icon: <SiLeetcode />,
    },
    {
        href: "https://drive.google.com/file/d/1gFT5LDRPu1jUn480cNgTIV1kNGSJfcij/view?usp=sharing",
        icon: <FaHackerrank />,
    },
];
const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                {list.map((data, index) => (
                    <li key={index}>
                        <a href={data.link}>{data.name}</a>
                    </li>
                ))}
            </ul>
            <div className="footer__social">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
