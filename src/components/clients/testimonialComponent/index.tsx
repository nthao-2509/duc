import React from "react";
import { TestimonialStyled } from "../styles/Testimonial";
import Container from "../Container";
import TopSession from "../TopSession";
import Slider from "react-slick";
const TestimonialComponent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <TestimonialStyled>
      <Container>
        <TopSession
          heading='Testimonial'
          title='What people are talking about our charity activities'
        />
        <div className='content'>
          <Slider {...settings}>
            {Array.from({ length: 15 }).map((item: any, key: number) => (
              <div className='item'>
                <div className='top'>
                  <div className='top__left'>
                    <img src='/images/avatar.png' alt='' />
                  </div>
                  <div className='top__right'>
                    <div className='name'>
                      <h1>Personal Name</h1>
                    </div>
                    <div className='profession'>
                      <h1>Profession</h1>
                    </div>
                  </div>
                </div>
                <div className='bottom'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vitae pellentesque turpis.
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </TestimonialStyled>
  );
};

export default TestimonialComponent;
