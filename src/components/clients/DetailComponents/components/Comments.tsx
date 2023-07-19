import React from "react";
import { CommentsStyled } from "./styled";

const Comments = () => {
  const [showInputReply, setShowInputReply] = React.useState<number>();
  return (
    <CommentsStyled>
      <div className='title'>
        <h1>3 Comments</h1>
      </div>
      <div className='content'>
        <div className='items'>
          {Array.from({ length: 3 }).map((item: any, key: number) => (
            <div className='item' key={key}>
              <div className='avt'>
                <img src='/images/avatar.png' alt='' />
              </div>
              <div className='info'>
                <div className='name'>
                  <h1>Josh Dunn</h1>
                </div>
                <div className='date'>
                  <p>07/20/2023 - 12:00am</p>
                </div>
                <div className='message'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque, voluptate illum iusto doloremque et ullam amet id
                  </p>
                </div>
                {showInputReply === key ? (
                  <div className='input__reply'>
                    <input type='text' placeholder='Enter a comment' />
                    <i className='fa-regular fa-paper-plane'></i>
                  </div>
                ) : (
                  <button
                    className='reply'
                    onClick={() => setShowInputReply(key)}
                  >
                    Reply
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommentsStyled>
  );
};

export default Comments;
