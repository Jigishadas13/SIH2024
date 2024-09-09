import React from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const navigate = useNavigate();  // Initialize useNavigate

  const handleClickMore = (title) => {
    if (title === 'AFFORESTATION') {
      navigate('/afforestation');  // Navigate to AfforestationAnalytics page
    } else if (title === 'CARBON CREDITS') {
      navigate('/carboncredits');  // Navigate to Carbon Credits page
    }
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}
          autoplay={autoPlay}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}>
          {data.map((d) => (
            <div className='bg-gradient-to-r from-gray-800 to-black text-white rounded-xl border-2 border-gray-900 shadow-md' key={d.title}>
              <div className='h-56 rounded-t-xl bg-gradient-to-r from-indigo-800 to-violet-900 flex justify-center items-center'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full border-2 border-white' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.title}</p>
                <p className='text-justify-self-center'>{d.description}</p>
                <button
                  className='bg-gray-900 text-white text-lg px-6 py-1 rounded-xl border-2 border-yellow-300 hover:bg-yellow-300 hover:bg-opacity-35 hover:text-gray-900 transition duration-300 ease-in-out'
                  onClick={() => handleClickMore(d.title)}  // Call handleClickMore on button click
                >
                  Click Here
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
    title: 'DATA COLLECTION',
    img: '/images/datacollection.png',
    description: 'Enter your chosen dataset for carbon footprint estimation'
  },
  {
    title: 'EMISSION ESTIMATION',
    img: '/images/gas-emissions-calculator-glyph-two-color-icon-vector.jpg',
    description: 'ML Model that calculates the emission estimate'
  },
  {
    title: 'AFFORESTATION',
    img: '/images/OIP.jpeg',
    description: 'Display afforestation analytics'
  },
  {
    title: 'CARBON CREDITS',
    img: '/images/CARBONCREDITS.png',
    description: 'Displays the available lands for increasing credits.'
  }
];

export default Cards;
