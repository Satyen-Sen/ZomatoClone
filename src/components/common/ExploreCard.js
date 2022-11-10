import React from 'react'
import './exploreCard.css'

export default function ExploreCard({ restaurant}) {
    const name = restaurant?.info?.name ?? "";
    const coverImage = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text; 
    const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0,3); 
    const bottomContainers = restaurant?.bottomContainers;

    const offers = restaurant?.bulkOffers ?? [];
    const proOff = offers.length>1 ? offers[0].text : null;
    const discount = offers.length>1 ? offers[1].text : offers.length===1 ? offers[0].text : null;

    return (
        <div className='explore-card'>
            <div className='explore-card-cover'>
                <img src={coverImage} alt={name} className='explore-card-image' height={240} width={320} style={{objectFit:'cover', borderRadius:12,}}/>
                <div className='delivery-time'>{deliveryTime}</div>
                <div className='pro-off tag'>{proOff}</div>
                <div className='discount tag'>{discount}</div>
            </div>

            <div className='res-row'>
                <div className='res-name'>{name}</div>
                <div className='res-rating'>{rating}☆</div>
            </div> 

            <div className='res-row'>
                <div className='res-cuisines'>
                    {cuisines.map( (item, i) => {return <span className='res-cuisines-tag'>{item}{i!== cuisines.length-1 && ", "}</span>})}</div>
                <div className='res-price'>{approxPrice}</div>
            </div>
            
            {bottomContainers.length>0 && 
                <div>
                    <div className='card-separator'>
                        
                    </div>
                    <div className='explore-bottom'>
                        <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} height={18}/>
                        <div className='res-bottom-text'>{bottomContainers[0]?.text}</div>
                    </div>
                </div>
            }
        </div>
    )
}