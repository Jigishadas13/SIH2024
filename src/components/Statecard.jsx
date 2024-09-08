import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Statecard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  const [autoPlay, setAutoPlay] = React.useState(true);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  return (
    <div className='w-1/2 md:w-1/3 m-auto mt-10'>
      <Slider
        {...settings}
        autoplay={autoPlay}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {data.map((d) => (
          <div
            className='relative group'
            key={d.title}
            onClick={pauseAutoPlay}
          >
            <img
              src={d.img}
              alt={d.title}
              className='w-full h-64 object-contain rounded-lg'
            />
            {/* Tooltip as a small message box with transparent white background */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-100 rounded-lg p-2 w-2/3 h-1/4'>
              <span className='text-sm text-black text-center'>
                {d.description}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    title: 'ap',
    img: `${process.env.PUBLIC_URL}/STATEMAP/ap.png`,
    description: 'carbonEmissions: 800,methaneEmissions: 70,afforestationArea: 550'
  },
  {
    title: 'chhattisgarh',
    img: `${process.env.PUBLIC_URL}/STATEMAP/chattisgarh.png`,
    description: ' carbonEmissions:1700,methaneEmissions: 150,afforestationArea: 250',
  },
  {
    title: 'jharkhand',
    img: `${process.env.PUBLIC_URL}/STATEMAP/jharkhand.png`,
    description: 'carbonEmissions: 1100,methaneEmissions: 95,afforestationArea: 400',
  },
  {
    title: 'maharashtra',
    img: `${process.env.PUBLIC_URL}/STATEMAP/maharashtra.png`,
    description: 'carbonEmissions: 1800,methaneEmissions: 160,afforestationArea: 280',
  },
  {
    title: 'mp',
    img: `${process.env.PUBLIC_URL}/STATEMAP/mp.png`,
    description: 'carbonEmissions:1300,methaneEmissions: 130,afforestationArea: 300',
  },
  {
    title: 'odisha',
    img: `${process.env.PUBLIC_URL}/STATEMAP/odisha.png`,
    description: 'carbonEmissions: 1500,methaneEmissions: 120,afforestationArea: 250',
  },
 
  {
    title: 'telangana',
    img: `${process.env.PUBLIC_URL}/STATEMAP/telangana.png`,
    description: 'carbonEmissions:1400,methaneEmissions:110,afforestationArea:370',
  },
  {
    title: 'westbengal',
    img: `${process.env.PUBLIC_URL}/STATEMAP/wb.png`,
    description: 'carbonEmissions: 900,methaneEmissions: 100,afforestationArea: 450',
  },
  {
    title: 'nagaland',
    img: `${process.env.PUBLIC_URL}/STATEMAP/nagaland.png`,
    description: 'carbonEmissions: 950,methaneEmissions: 80,afforestationArea: 500',
  },
  {
    title: 'meghalaya',
    img: `${process.env.PUBLIC_URL}/STATEMAP/meghalaya.png`,
    description: 'carbonEmissions: 1000,methaneEmissions: 90,afforestationArea: 420',
  },
];

export default Statecard;
