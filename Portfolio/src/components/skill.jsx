import React from 'react';
import meter1 from "../assets/meter1.png";
import meter2 from "../assets/meter2.png";
import meter3 from "../assets/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className=" bg-zinc-950 text-white py-16" id="skills">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Skills</h2>
                <p className="text-lg text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <Carousel 
              responsive={responsive} 
              infinite={true} 
              autoPlay={true} 
              autoPlaySpeed={3000}
              className="skill-slider"
            >
                <div className="flex flex-col items-center">
                    <img src={meter1} alt="Web Development" className="mb-4" />
                    <h5 className="text-xl font-semibold">Web Development</h5>
                </div>
                <div className="flex flex-col items-center">
                    <img src={meter2} alt="Brand Identity" className="mb-4" />
                    <h5 className="text-xl font-semibold">App Development</h5>
                </div>
                <div className="flex flex-col items-center">
                    <img src={meter3} alt="Logo Design" className="mb-4" />
                    <h5 className="text-xl font-semibold">Machine Learning</h5>
                </div>  
            </Carousel>
        </div>
    </section>
  );
};

export default Skills;
