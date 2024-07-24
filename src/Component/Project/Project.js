import React from 'react'
import './Project.css'
import IMG1 from '../../assets/Ecommerce_Project_1.png'
import IMG2 from '../../assets/Tailoth_Project_2.png'
import IMG3 from '../../assets/Text_utilsis_Project_3.png'
import IMG4 from '../../assets/Wallpaper.png'
const data = [
    {
        id: 1,
        image: IMG1,
        title: "ShopEasy Ecommmerce Web Application",
        github: "https://github.com/RishabhGorakhpuriya",
        demo: "https://ecommerce-gpj1xo6r6-rishabhgorakhpuriya.vercel.app/"
    },
    {
        id: 2,
        image: IMG2,
        title: "Tailoth",
        github: "https://github.com/RishabhGorakhpuriya",
        demo: "https://telioth-ecljwn4k4-rishabhgorakhpuriya.vercel.app/"
    },
    {
        id: 3,
        image: IMG3,
        title: "Text Transformation",
        github: "https://github.com/RishabhGorakhpuriya",
        demo: "https://text-transformation.netlify.app/"
    },
    {
        id: 4,
        image: IMG4,
        title: "Wallpaper",
        github: "https://github.com/RishabhGorakhpuriya",
        demo: "https://pixabywallaper.netlify.app/"
    }
];
const Project = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Project</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt="" />
                            </div>
                            <div className='card-title'>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='blank'>
                                        Github
                                    </a>
                                    <a href={demo} className="btn btn-primary" target='blank'>
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Project
