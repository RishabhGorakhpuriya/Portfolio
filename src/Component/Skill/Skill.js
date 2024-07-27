import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import './Skill.css'
const Skill = () => {

    const frontendSkills = [
        { id: 1, skill: 'HTML', level: 'Experienced' },
        { id: 2, skill: 'CSS', level: 'Advanced' },
        { id: 3, skill: 'JavaScript', level: 'LoveIt' },
        { id: 4, skill: 'Tailwind', level: 'Intermediate' },
        { id: 5, skill: 'Bootstrap', level: 'Beginner' },
        { id: 6, skill: 'React', level: 'Senior' },
    ];

    const backendSkills = [
        { id: 1, skill: 'Node.js', level: 'Experienced' },
        { id: 2, skill: 'Express', level: 'Advanced' },
        { id: 3, skill: 'Mongo', level: 'LoveIt' },
        { id: 4, skill: 'Next.js', level: 'Intermediate' },
        { id: 5, skill: 'MySQL', level: 'Beginner' },
        { id: 6, skill: 'C/C++', level: 'Senior' },
    ];

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experiences</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontendSkills.map(({ id, skill, level }) => (
                            <article key={id} className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{skill}</h4>
                                    <small className="text-light">{level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backendSkills.map(({ id, skill, level }) => (
                            <article key={id} className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{skill}</h4>
                                    <small className="text-light">{level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
