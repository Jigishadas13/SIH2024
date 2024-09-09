import React from 'react';
import { FiFilter } from 'react-icons/fi'; // Import the filter icon from react-icons
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarbonCredits() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300
  };

  const [autoPlay, setAutoPlay] = React.useState(true);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  return (
    <div className='w-3/4 m-auto'>
      {/* Heading div with dark green background and white text */}
      <div className='bg-green-800 text-white flex justify-between items-center py-6 rounded-t-xl px-4'>
        {/* Heading text on the left */}
        <div className='text-left'>
          <h1 className='text-3xl font-bold'>Available Carbon Credit Lands</h1>
          <p className='text-lg mt-2'>Explore and purchase lands to increase your carbon credits.</p>
        </div>
        
        {/* Filter icon on the right */}
        <div className='text-3xl cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out'>
          <FiFilter /> {/* Filter icon */}
        </div>
      </div>

      {/* Slider component below the heading */}
      <div className='mt-10'>
        <Slider {...settings}
          autoplay={autoPlay}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}>
          {data.map((d) => (
            <div className='bg-gradient-to-r from-gray-800 to-black text-white rounded-xl border-2 border-gray-900 shadow-md' key={d.title}>
              <div className='h-56 rounded-t-xl bg-gradient-to-r from-yellow-400 to-green-500 flex justify-center items-center'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full border-2 border-white' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.title}</p>
                <p className='text-center'>{d.description}</p>
                <button
                  className='bg-gray-900 text-white text-lg px-6 py-1 rounded-xl border-2 border-yellow-300 hover:bg-yellow-300 hover:bg-opacity-35 hover:text-gray-900 transition duration-300 ease-in-out'
                >
                  Buy Now!
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    title: 'ROHIT',
    img: '/images/afforestationland.png',
    description: 'Land Area: 150 hectares, Cost: 1,40,000, Credits: 500'
  },
  {
    title: 'AMAN',
    img: '/images/afforestationland.png',
    description: 'Land Area: 1500 hectares, Cost: 2,00,000, Credits: 1500'
  },
  {
    title: 'SRISHTI',
    img: '/images/afforestationland.png',
    description: 'Land Area: 200 hectares, Cost: 80,000, Credits: 800'
  },
  {
    title: 'SHRUTI',
    img: '/images/afforestationland.png',
    description: 'Land Area: 1200 hectares, Cost: 1,80,000, Credits: 800'
  }
];

export default CarbonCredits;
