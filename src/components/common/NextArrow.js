import React from 'react'
import arrowRight from '../../images/arrow_right.png'

export default function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div 
            className={className} 
            onClick={onClick} 
            style={{ 
                zIndex:5, 
                right:0,
                top:88, 
                height:30,
                width:30,
                backgroundColor:'#FFFFFF',
                borderRadius:'50%', 
                boxShadow:'rgb(28 28 28 / 24%) 2px 4px 10px 2px',
                padding:0, 
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <img src={arrowRight} alt='arrowRight' height={25} width={25} style={{position:'absolute', top:2, right:1,}}/>
        </div>
    )
}
