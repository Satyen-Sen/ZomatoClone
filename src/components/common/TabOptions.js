import React from 'react'
import './tabOptions.css'

const tabs = [
    {   id:1, 
        title:'Delivery', 
        active_img:'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png', 
        background:'#FCEEC0',
        inactive_img:'//b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
    },
    {   id:2, 
        title:'Dining Out', 
        active_img:'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png', 
        background:'#E5F3F3',
        inactive_img:'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
    },
    {   id:3, 
        title:'Nightlife', 
        active_img:'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png', 
        background:'#EDF4FF',
        inactive_img:'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
    }
]

export default function TabOptions(props) {
    return (
        <div className='tab-options'> 
            {tabs.map( (tab) => {return (

                <div 
                    onClick={() => props.setActiveTab(tab.title)} 
                    style={{borderColor : `${props.activeTab === tab.title ? '#EF4F5F' : '#FFFFFF'}`}}
                    className='tab-item'
                >
                    <div style={{backgroundColor : `${props.activeTab === tab.title ? tab.background : '#F8F8F8'}`}} className='img-container'>
                        <img alt={tab.title} src={props.activeTab === tab.title ? tab.active_img : tab.inactive_img} height={32} width={32}/>
                    </div> 
                    <div style={{color : `${props.activeTab === tab.title ? '#EF4F5F' : '#696969'}`}} className='tab-title'>
                        {tab.title}
                    </div>
                </div>

            )})}
        </div>
    )
}
