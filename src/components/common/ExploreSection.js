import React from 'react'
import './exploreSection.css'
import { restaurants } from '../../data/restaurants'

const list = restaurants; 

export default function ExploreSection(props) {
    const name = list?.info?.name ?? "";
    const coverImage = list?.info?.image?.url;
    const deliveryTime = list?.order?.deliveryTime;
    const rating = list?.info?.rating?.rating_text;
    const approxPrice = list?.info?.cfo?.text; 
    const cuisines = list?.info?.cuisine?.map((item) => item.name).slice(0,3); 
    const bottomContainers = list?.bottomContainers; 
    const goldOff = list?.gold?.text;

    const offers = list?.bulkOffers ?? [];
    const proOff = offers.length>1 ? offers[0].text : null;
    const discount = offers.length>1 ? offers[1].text : offers.length===1 ? offers[0].text : null;

    return (
        <div className='explore-section'>
            <div className='collection-title'>
                {props.collectionName}
            </div>

            <div className='explore-grid'>
                {list.map((restaurants) => { return (
                    <div className='explore-card cur-po'> 
                        <div className='explore-card-cover'>
                            <img src={coverImage} alt={name} className='explore-card-image'/>
                        </div>
                    </div>
                )})}
            </div>
          
        </div>
    )
}
