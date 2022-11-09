import React, { useState } from 'react'
import Header from '../../components/common/Header'
import TabOptions from '../../components/common/TabOptions'
import Footer from '../../components/common/Footer'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/diningOut'
import Nightlife from '../../components/nightlife'


function getTab(tab) {
    switch (tab) {
        case "Delivery": 
            return <Delivery/>
        case "Dining Out": 
            return <DiningOut/>
        case "Nightlife": 
            return <Nightlife/>
        default: 
            return <Delivery/>
    }  
}

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getTab(activeTab)}
            <Footer/>
        </div>
    )
}