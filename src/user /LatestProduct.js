import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

export const LatestProduct = ({data}) => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate('/detail');}
    
  return (
    <div className='slider-container'>
        <Slider {...settings}>
        {data?.map((item) => (
                <div key={item.id} className='opacity-65' onClick={handleBack}>
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
    </div>
  )
}
