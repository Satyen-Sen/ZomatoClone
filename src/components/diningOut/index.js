import React from 'react'
import Collection from '../common/Collection'
import FilterItem from '../common/FilterItem'
import filterImg from '../../images/filter.png'
import sortImg from '../../images/sort.png'
import arrowImg from '../../images/down_arrow_gery.png'
import ExploreSection from '../common/ExploreSection'
import { diningOut } from '../../data/diningOut';

const collectionList = [
    {
        id:1,
        title: 'Romantic Dining',
        places: 15,
        cover: 'https://b.zmtcdn.com/data/collections/9d8fe0107063fddcd78818af5fbe2146_1647245872.jpg',
    },
    {
        id:2,
        title: ' New in Town',
        places: 12,
        cover: 'https://b.zmtcdn.com/data/collections/1d1e838de3c921a6bdacb382a3d01c62_1667465987.jpg',
    },
    {
        id:3,
        title: 'Insta-worthy Places',
        places: 16,
        cover: 'https://b.zmtcdn.com/data/collections/07a3fe64bfe172a748c846cf0d9dd622_1665556213.jpg',
    },
    {
        id:4,
        title: 'Dine-in with a Sea view',
        places: 18,
        cover: 'https://b.zmtcdn.com/data/collections/9fc3c01e8524abf241234234f0d6eac6_1665555386.jpg',
    },
    {
        id:5,
        title: 'Buzzing Nightlife & Clubs',
        places: 14,
        cover: 'https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665558689.jpg',
    },
    {
        id:6,
        title: 'Great Buffets',
        places: 24,
        cover: 'https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg',
    },
    {
        id:7,
        title: 'World Vegan Month',
        places: 18,
        cover: 'https://b.zmtcdn.com/data/collections/8a5d8298d4f218d1ae8923419f1af2fb_1667298875.jpg',
    },
    {
        id:8,
        title: 'Work Friendly Places',
        places: 22,
        cover: 'https://b.zmtcdn.com/data/collections/174480faee1a4a2c0f0fdd82cac5d8a5_1647240902.jpg',
    },
]

const diningOutFilters = [
    {
        id : 1,
        icon : filterImg,
        title : 'Filters',
    },
    {
        id : 2,
        title : 'Rating: 4.0+',
        end_icon : arrowImg,
    },
    {
        id : 3,
        icon : sortImg,
        title : 'Distance',
    },
    {
        id : 4,
        title : 'Outdoor Seating',
    },
    {
        id : 5,
        title : 'Serves Alcohol',
    },
    {
        id : 6,
        title : 'Open Now',
    },
]

const diningOutList = diningOut;

export default function DiningOut() {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className='filters'>
                {diningOutFilters && diningOutFilters.map( (item) => { return (
                    <div key={item.id}>
                        <FilterItem icon={item.icon} title={item.title} endIcon={item.end_icon}/>
                    </div>
                )})}
            </div>
            <ExploreSection collectionName='Best Dining Restaurants near you in Mumbai' list={diningOutList}/>
        </div>
    )
}
