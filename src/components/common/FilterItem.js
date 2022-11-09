import React from 'react'
import './filterItem.css'

function FilterItem(props) { 
    return (
        <div className='filter-item'>
            {props.icon && <img src={props.icon} alt='filter-icon' width={20} height={20}/>}
            <div className='filter-title'>{props.title}</div>
            {props.endIcon &&  <img src={props.endIcon} alt='end-icon' width={10} height={10} className='end-icon'/>}
        </div>
    )
}

export default FilterItem