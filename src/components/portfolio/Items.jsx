import React, { useState } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";
import { motion } from 'framer-motion';

const Items = ({ projectItems }) => {
    const [flippedCard, setFlippedCard] = useState(null);

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };

    const colorMap = {
        HTML: '#E34F26', // Slightly more modern shade of red-orange
        CSS: '#2965F1', // A richer blue for CSS
        JavaScript: '#F7E03C', // A softer yellow
        React: '#61DAFB', // Retaining the original React color (modern and clean)
        PHP: '#6D6D6D', // A more neutral and sophisticated gray for PHP
        Laravel: '#FF5A5F', // A refined shade of red
        Java: '#007396', // Retaining the original Java color (deep and strong)
        Python: '#4B8BBE', // A more balanced blue for Python
        'C++': '#004B87', // A deeper blue for C++
        Tailwind: '#3B82F6', // A fresh and bright blue for Tailwind CSS
        Bootstrap: '#6F42C1' // A vibrant shade of purple for Bootstrap
    };
    

    const handleMouseEnter = (id) => {
        setFlippedCard(id);
    };

    const handleMouseLeave = () => {
        setFlippedCard(null);
    };

    return (
        <>
            {projectItems.map((projectItem) => {
                const { id, img, category, title, description, githubURL, technologies = [] } = projectItem;
                const isClickable = !!githubURL;

                return (
                    <motion.div
                        layout
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0.8, scale: 0.6 }}
                        exit={{ opacity: 0.8, scale: 0.6 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                        className={`portfolio__items card card-two ${!githubURL ? 'non-clickable' : ''}`}
                        key={id}
                        onClick={() => isClickable && handleClick(githubURL)}
                        onMouseEnter={() => handleMouseEnter(id)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: isClickable ? 'pointer' : 'not-allowed' }}
                    >
                        <div className={`card-inner ${flippedCard === id ? 'flipped' : ''}`}>
                            <div className="card-front">
                                <div className="portfolio__img-wrapper">
                                    <img src={img} alt="" className="portfolio__img" />
                                </div>
                                <span className="portfolio__category text-cs">{category}</span>
                                <h3 className="portfolio__title">{title}</h3>
                                <p className="portfolio__description">{description}</p>
                                <img src={shapeTwo} alt="" className="shape c__shape transparent" style={{ opacity: 0.3 }} />
                                <div className="tags">
                                    {technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="tag"
                                            style={{ backgroundColor: colorMap[tech] || '#ccc' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-back-content">
                                    <FaGithub className="github-icon" />
                                    <p className="card-back-text">View on GitHub</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default Items;