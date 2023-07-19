import React from "react";
import { RecentPostStyled } from "./styled";

const RecentPost = (props: { dataPost: any[]; title: string }) => {
  return (
    <RecentPostStyled>
      <div className='title'>
        <h1>{props.title}</h1>
      </div>
      <div className='content'>
        <div className='items'>
          {props.dataPost.map((item: any, index: number) => (
            <div className='item'>
              <div className='left'>
                <img src='/images/recent.jpg' alt='' />
              </div>
              <div className='right'>
                <div className='right__title'>
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </div>
                <div className='right__des'>
                  <p>22y-admin-An Web Design</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RecentPostStyled>
  );
};

export default RecentPost;
