import React from 'react'
import './header.css';
import map from '../../images/map.png';
import caret from '../../images/caret-down.png';
import divider from '../../images/divider.png';
import search from '../../images/search.png';
import avatar from '../../images/avatar.png';
import arrow from '../../images/arrow-down.png';

export default function Header() {
    return (
        <div className='header'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Zomato-logo' height={27} width={140}/>
            
            <div className='search-box'>
                <img src={map} className='icon-margin' alt='location' height={20} width={20}/>
                <input placeholder='Mumbai, India' type='text'/>
                <img src={caret} alt='caret' height={10} width={10}/>
                <img src={divider} alt='caret' height={30} width={20}/>
                <img src={search} className='icon-margin' alt='caret' height={20} width={20}/>
                <input placeholder='Search for restaurant, cuisine or a dish' type='text' className='right-search-bar'/>
            </div>

            <div className='profile-wrapper'>
                <img src={avatar} className='profile' alt='profile' height={40} width={40}/>
                <div>Shivam</div>
                <img src={arrow} alt='caret' height={16} width={16}/>
            </div>
        </div>
    )
}
 