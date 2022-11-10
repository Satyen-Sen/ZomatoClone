import React from 'react'
import './exploreSection.css'
import ExploreCard from './ExploreCard'

export default function ExploreSection({list, collectionName}) {
    
    return (
        <div className='explore-section'>
            <div className='collection-title'> 
                {collectionName}
            </div>

            <div className='explore-grid'>
                {list.map((restaurant) => { return (
                    <ExploreCard restaurant={restaurant}/>
                )})}
            </div>
        </div>
    )
}