import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

const HeaderSocial = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/rishabh-gorakhpuriya-46bb57218/",
            icon: <BsLinkedin />,
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
            href: "https://drive.google.com/file/d/1saa4SxZCC7BV56aiTylpPstWtb163fmt/view?usp=drive_link",
            icon: <GrAchievement />,
        },
    ];
    return (
        <div className="header__socials">
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
    )
}

export default HeaderSocial
