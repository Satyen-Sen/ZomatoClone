import React from 'react'
import arrowLeft from '../../images/arrow_left.png'

export default function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div 
            className={className} 
            onClick={onClick} 
            style={{
                zIndex:5, 
                left:0,
                top:88, 
                height:30,
                width:30,
                backgroundColor:'#FFFFFF',
                borderRadius:'50%', 
                boxShadow:'rgb(28 28 28 / 24%) 2px 4px 10px 2px',
                padding:0, 
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <img src={arrowLeft} alt='arrowRight' height={25} width={25} style={{position:'absolute', left:1,}}/>
        </div>
    )
}
