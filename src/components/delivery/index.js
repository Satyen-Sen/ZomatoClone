import React from 'react'
import './delivery.css'
import FilterItem from '../common/FilterItem'
import filterImg from '../../images/filter.png'
import sortImg from '../../images/sort.png'
import arrowImg from '../../images/down_arrow_gery.png'
import DeliveryCollections from './DeliveryCollections'
import TopBrands from './TopBrands'
import ExploreSection from '../common/ExploreSection'
import { restaurants } from '../../data/restaurants'

const deliveryFilters = [
    {
        id : 1,
        icon : filterImg,
        title : 'Filters',
    },
    {
        id : 2,
        icon : sortImg,
        title : 'Delivery Time',
    },
    {
        id : 3,
        title : 'Rating: 4.0+',
    },
    {
        id : 4,
        title : 'Pure Veg',
    },
    {
        id : 5,
        title : 'Cuisines',
        end_icon : arrowImg,
    },
    {
        id : 6,
        title : 'More filters',
        end_icon : arrowImg,
    },
]

const restaurantList = restaurants; 

export default function Delivery() {
    return (
        <div>
            <div className='filters'>
                {deliveryFilters && deliveryFilters.map( (item) => { return (
                    <div key={item.id}>
                        <FilterItem icon={item.icon} title={item.title} endIcon={item.end_icon}/>
                    </div>
                )})}
            </div>
            <DeliveryCollections/>
            <TopBrands/>
            <ExploreSection collectionName='Delivery Restaurants in Mumbai' list={restaurantList}/>
        </div>
    )
} 