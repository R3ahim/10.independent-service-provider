import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import nature1 from '../../img/nature1.jpg'
import nature2 from '../../img/nature2.jpg'
import nature3 from '../../img/nature3.jpg'

const Banner = () => {
   
        const [index, setIndex] = useState(0);;
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
        <div>
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={nature1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={nature2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={nature3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

        </div>
    );
};

export default Banner;