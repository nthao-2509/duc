import React from "react";
import { CardStyled } from "./styles/Card";

const Card = (props: {
  image: string;
  raised: string | number | undefined;
  goal: string | number | undefined;
  title: string;
  des: string;
  button: boolean;
  comment: boolean;
}) => {
  return (
    <CardStyled>
      <div className='item'>
        <div className='top'>
          <img src={props.image} alt='' />
        </div>
        <div className='bottom'>
          <div className='content'>
            <div className='raised-goal'>
              {props.raised && (
                <div className='raised'>
                  <p>Raised: {props.raised}</p>
                </div>
              )}
              {props.goal && (
                <div className='raised'>
                  <p>Goal: {props.goal}</p>
                </div>
              )}
            </div>
            <div className='title'>
              <h1>{props.title}</h1>
            </div>
            <div className='description'>
              <p>{props.des}</p>
            </div>
          </div>
          {props.button && (
            <div className='button'>
              <button className='learnMore'>Learn More</button>
              <button className='DonateNow'>Donate now</button>
            </div>
          )}
          {props.comment && (
            <div className='comment'>
              <div className='comment__content'>
                <div className='item'>
                  <i className='fa-solid fa-user'></i>
                  <h1>Admin</h1>
                </div>
                <div className='item'>
                  <i className='fa-solid fa-comment'></i>
                  <p>15</p>
                  <h1>Comment</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
