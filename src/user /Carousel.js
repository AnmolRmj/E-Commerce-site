import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

export const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        
    };
    const navigates=useNavigate()
  const handleDetails=()=>{
      navigates('/detail');}

    return (
        <Slider {...settings} >
           
           {data?.map((item) => (
                <div key={item.id} className='opacity-65' onClick={() => handleDetails(item)}>
                   <div className='flex justify-center' 
                   style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize:'cover',
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    minHeight:"250px",
                    minWidth:"500px"
                    
                   }}>

                   </div>
                </div>
            ))}
           
        </Slider>
    );
};

