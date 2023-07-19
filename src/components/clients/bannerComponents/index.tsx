import React from "react";
import { BannerStyled } from "../styles/Banner";
import Container from "../Container";

const data = [
  {
    title: "30+",
    description: "philantropists",
    image: "heart-image.png",
  },
  {
    title: "50+",
    description: "Our Goal",
    image: "OurGoal.png",
  },
  {
    title: "200+",
    description: "Volunteer",
    image: "volunteer.png",
  },
  {
    title: "10000$",
    description: "Raised",
    image: "raised.png",
  },
];
const BannerComponent = () => {
  return (
    <BannerStyled bgImage='/images/banner-image.png'>
      <div className='items'>
        {data.map(
          (
            item: { title: string; description: string; image: string },
            index: number
          ) => (
            <div className='item' key={index}>
              <img
                src={`/images/${item.image}`}
                alt={item.title + item.description}
              />
              <div className='content'>
                <div className='title'>
                  <h1>{item.title}</h1>
                </div>
                <div className='description'>
                  <h1>{item.description}</h1>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </BannerStyled>
  );
};

export default BannerComponent;
