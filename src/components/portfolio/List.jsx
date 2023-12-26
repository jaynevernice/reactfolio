import React from 'react'
import { useState } from 'react'

// Define functional component that receives 2 props
const List = ({list, filterItems}) => {
  // State variable for tracking currently active/selected category button
  const [active, setActive] = useState(0)

  return (
    <div className='portfolio__list'>{list.map((category, index) => {
      return (
        // for each category, render a button
        // if active state variable equals current index assign active-work class
        // class portfolio__list-item and text-cs is always applied
        // event handler onClick performs 2 actions: set active state to current index marking it as active & call filterItems 
        // passing current category as an argument
        <button className={`${active === index ?  'active-work' : '' } portfolio__list-item text-cs`} key={index} onClick={() => {setActive(index);filterItems(category);}}>{category}
        </button>
      )
    })}</div>
  )
}

export default List