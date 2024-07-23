import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Asegúrate de que las rutas a las imágenes sean correctas
const images = [
  '/image1.jpeg',
  '/image2.jpeg',
  '/image3.jpeg'
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tiempo en ms entre cada imagen
  };

  return (
    <div className="w-full h-[550px] my-40 overflow-hidden"> {/* Añadido margen vertical de 40px */}
      <Slider {...settings} className="w-full h-full">
        {images.map((src, index) => (
          <div key={index} className="h-full">
            <img 
              src={src} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
