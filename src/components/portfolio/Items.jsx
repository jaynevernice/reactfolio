import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import shapeTwo from "../../assets/shape-2.png"
import {motion} from 'framer-motion'

const Items = ({projectItems}) => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };

  return (
    <>
    {projectItems.map((projectItem) => {
        // destructure each project item from the ProjectItem object
        const {id, img, category, title, description, githubURL} = projectItem;
        return (
            <motion.div layout 
                animate={{opacity:1, scale:1}}
                initial={{opacity:0.8, scale:0.6}}
                exit={{opacity:0.8, scale: 0.6}}
                transition={{duration:0.3}}
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                className="portfolio__items card card-two" 
                key={id}
                onClick={() => handleClick(githubURL)}
                style={{ cursor: 'pointer' }}
                >

                    <div className="portfolio__img-wrapper">
                        <img src={img} alt="" className="portfolio__img" />
                    </div>

                    <span className="portfolio__category text-cs">{category}</span>
                    <h3 className="portfolio__title">{title}</h3>
                    <p className="portfolio__description">{description}</p>

                    {/* <a href="#pricing" className="link">
                        See Pricing <FaArrowRight className='link__icon'></FaArrowRight>
                    </a> */}

                    <img src={shapeTwo} alt="" className="shape c__shape transparent" style={{ opacity: 0.3 }} />

            </motion.div>
        )
    })}
    </>
  ) 
}

export default Items