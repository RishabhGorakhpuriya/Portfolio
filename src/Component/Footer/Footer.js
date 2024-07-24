import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>

                <li>
                    <a href="#projects">Project</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/rishabh-gorakhpuriya-46bb57218/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/RishabhGorakhpuriya" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/RishabhGorakhpuriya/" target="_blank">
                    <SiLeetcode />
                </a>
                <a href="https://drive.google.com/file/d/1gFT5LDRPu1jUn480cNgTIV1kNGSJfcij/view?usp=sharing" target="_blank">
                    <FaHackerrank />
                </a>
            </div>
        </footer>
    )
}

export default Footer
