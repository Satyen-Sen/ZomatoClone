import React from 'react'
import './collection.css'
import Slider from "react-slick"
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import caretRight from '../../images/caret-right.png'

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}; 

export default function Collection({list}) {
    return (   
        <div className='colection-wrapper'>
            <div className='collection-title'>
                Collections
            </div>

            <div className='collection-subtitle'>
                <div className='collection-subtitle-text'>
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
                </div>
                <div className='collection-location'>
                    All collections in Mumbai
                    <img src={caretRight} alt='caret' height={10} width={10}/>
                </div>
            </div>

            <Slider {...settings}>
                {list.map( (item) => {
                    return (
                        <div className='collection-cover'>
                            <img src={item.cover} className='collection-image' alt={item.title} height={320} width={260}/>
                            <div className='dark-overlay'></div>
                            <div className='collection-card-title'>{item.title}</div>
                            <div className='collection-card-subtitle'>{item.places} Places</div>
                        </div>
                    )
                })}    
            </Slider>
        </div>
    )
}
