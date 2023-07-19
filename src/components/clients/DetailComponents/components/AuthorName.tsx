import React from "react";
import { AuthorNameStyled } from "./styled";

const AuthorName = () => {
  return (
    <AuthorNameStyled>
      <div className='author'>
        <div className='left'>
          <img src='/images/avatar.png' alt='' />
        </div>
        <div className='right'>
          <div className='name'>
            <h1>Author Name </h1>
          </div>
          <div className='info'>
            <p>
              Being a volunteer is one of the best things you can do with your
              life people who need help.
            </p>
          </div>
        </div>
      </div>
    </AuthorNameStyled>
  );
};

export default AuthorName;
