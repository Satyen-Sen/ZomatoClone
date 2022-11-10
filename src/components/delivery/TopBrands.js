import React from 'react'
import Slider from "react-slick"
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const topBrandsCollection = [
    {   
        id:1,  
        title:"McDonald's",       
        subtitle:'26 min', 
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png',
    },
    {
        id:2,  
        title:"La Pino'z Pizza", 
        subtitle:'27  min', 
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png',
    },
    {
        id:3,  
        title:"Domino's Pizza", 
        subtitle:'30  min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png',
    },
    {
        id:4,  
        title:"Subway",       
        subtitle:'24  min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png',
    },
    {
        id:5,  
        title:"Burger King",  
        subtitle:'39 min', 
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png',
    },
    {
        id:6,  
        title:"Pizza Hut",    
        subtitle:'36 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png',
    },
    {
        id:7,  
        title:"Meraki",       
        subtitle:'44 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png',
    },
    {
        id:8,  
        title:"KFC", 
        subtitle:'54 min',         
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png',
    },
    {
        id:9,  
        title:"Theobroma", 
        subtitle:'48 min',   
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png',
    },
    {
        id:10, 
        title:"Fassos",  
        subtitle:'54 min',     
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799691.png',
    },
]

const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
}; 


export default function TopBrands() {
    return (
        <div>
            <div className='collection-title'>
                Top brands for you
            </div>

            <Slider {...settings}>
                {topBrandsCollection.map( (item) => {
                    return (
                        <div> 
                            <div className='item-cover'>
                                <img src={item.cover} className='item-image' alt={item.title} height={150} width={150}/>
                            </div>
                            <div className='item-title'>
                                {item.title}
                            </div>
                            <div className='item-subtitle'>
                                {item.subtitle}
                            </div>
                        </div>
                    )
                })}    
            </Slider>
        </div>
    )
} 
