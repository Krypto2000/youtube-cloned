import React, { useState } from 'react'
import "./_categories.scss"

const keywords =[
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Allgorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
]
const CategoriesBar = () => {
  const [activeElement, setActiveElement]= useState("All")
  
  const handleClick = (value)=>{
    setActiveElement(value)
  }
  
  return (
    <div className='CategoriesBar'>

      {keywords.map((value, i) => (
        <span 
        
        onClick={()=>handleClick(value)}
        
        key={i}
        className={activeElement === value ? "active": ''}
        >{value}</span>
      ))}
    </div>
  );
  
}

export default CategoriesBar
