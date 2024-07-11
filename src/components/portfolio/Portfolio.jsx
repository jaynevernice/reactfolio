import React from 'react'
import List from './List'
import Items from './Items'
import {projects} from '../../Data' 
import { useState } from 'react'
import "./portfolio.css"
import { AnimatePresence } from 'framer-motion'
import shapeOne from '../../assets/shape-1.png';

const allNavList = ['all', 
                    // Set only stores unique values and automatically removes duplicates
                    // Spread operator converts the set back into an array
                    ...new Set(projects.map((project) => project.category)),
                ];
console.log(allNavList);

const Portfolio = () => {
    // State variables
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) => {
        if(category === 'all') {
            // Set projectItems back to to the original projects array to show all projects
            setMenuItems(projects);
            return;
        }

        // new array containing only the items that matches user selected category
        const newProjectItems = projects.filter((item) => item.category === category);

        // set projectItems state to newProjectItems array
        setMenuItems(newProjectItems);
    };
 
    return (
        <section className="portfolio section" id="work">
            <h2 className="section__title text-cs">Portfolio</h2>
            <p className="section__subtitle">My <span> Projects</span></p>

            <List list={navList} filterItems={filterItems} />
            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Portfolio</span>
            </div>

        </section>
    )
}

export default Portfolio