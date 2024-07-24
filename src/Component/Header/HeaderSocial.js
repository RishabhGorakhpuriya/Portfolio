import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/rishabh-gorakhpuriya-46bb57218/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/RishabhGorakhpuriya" target="_blank">
                <FaGithub />
            </a>
            <a href="https://leetcode.com/u/RishabhGorakhpuriya/" target="_blank">
                <SiLeetcode />
            </a>
            <a href="https://drive.google.com/file/d/1saa4SxZCC7BV56aiTylpPstWtb163fmt/view?usp=drive_link" target="_blank">
                <GrAchievement />

            </a>
        </div>
    )
}

export default HeaderSocial
