import React from 'react'
import Slider from "react-slick"
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const deliveryItems = [
  {id:1,  title:'Pizza',    cover:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',},
  {id:2,  title:'Biryani',  cover:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',},
  {id:3,  title:'Chaat',    cover:'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',},
  {id:4,  title:'Sandwich', cover:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',},
  {id:5,  title:'Chicken',  cover:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',},
  {id:6,  title:'Paratha',  cover:'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',},
  {id:7,  title:'Dosa',     cover:'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',},
  {id:8,  title:'Bowl',     cover:'https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png',},
  {id:9,  title:'Rolls',    cover:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',},
  {id:10, title:'Noodles',  cover:'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',},
  {id:11, title:'Burger',   cover:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png ',},
  {id:12, title:'Thali',    cover:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',},
]

const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}; 


export default function DeliveryCollections() {
    return (
        <div className='delivery-collection-group'>
            <div className='collection-title'>
                Inspiration for your first order
            </div>

            <Slider {...settings}>
                {deliveryItems.map( (item) => {
                    return (
                        <div> 
                            <div className='item-cover'>
                                <img src={item.cover} className='item-image' alt={item.title} height={150} width={150}/>
                            </div>
                            <div className='item-title'>
                                {item.title}
                            </div>
                        </div>
                    )
                })}    
            </Slider>
        </div>
    )
} 
