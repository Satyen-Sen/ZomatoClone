import React from 'react'
import Collection from '../common/Collection'
import FilterItem from '../common/FilterItem'
import filterImg from '../../images/filter.png'
import sortImg from '../../images/sort.png'
import arrowImg from '../../images/down_arrow_gery.png'
import ExploreSection from '../common/ExploreSection'
import { nightlife } from '../../data/nightlife';


const collectionList = [
    {
        id:1,
        title: 'Buzzing Nightlife & Clubs',
        places: 14,
        cover: 'https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665558689.jpg',
    },
    {
        id:2,
        title: ' Best Microbreweries',
        places: 12,
        cover: 'https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665569654.jpg',
    },
    {
        id:3,
        title: 'Best Bars & Pubs',
        places: 16,
        cover: 'https://b.zmtcdn.com/data/collections/b80f739090610e0212597384dd08d834_1665569124.jpg',
    },
    {
      id:4,
      title: 'Buzzing Nightlife & Clubs',
      places: 14,
      cover: 'https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665558689.jpg',
  },
  {
      id:5,
      title: ' Best Microbreweries',
      places: 12,
      cover: 'https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665569654.jpg',
  },
  {
      id:6,
      title: 'Best Bars & Pubs',
      places: 16,
      cover: 'https://b.zmtcdn.com/data/collections/b80f739090610e0212597384dd08d834_1665569124.jpg',
  },
]

const nightlifeFilters = [
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
        title : 'Pubs & Bars',
    },
]

const nightlifeList = nightlife;

export default function sDiningOut() {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className='filters'>
                {nightlifeFilters && nightlifeFilters.map( (item) => { return (
                    <div key={item.id}>
                        <FilterItem icon={item.icon} title={item.title} endIcon={item.end_icon}/>
                    </div>
                )})}
            </div>
            <ExploreSection collectionName='Best Dining Restaurants near you in Mumbai' list={nightlifeList}/>
        </div>
    )
}