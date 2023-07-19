import React from "react";
import NavbarClient from "./Navbar";
import { StyleHeader } from "../styles/Header";

const HeaderComponent = () => {
  return (
    <StyleHeader bgImage='/images/header-image.png'>
      <NavbarClient />
      <div className='content'>
        <div className='title'>
          <h1>Let's be kind for children</h1>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            pellentesque turpis. Donec in hendrerit dui, vel blandit massa. Ut
            vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus
          </p>
        </div>
        <div className='button'>
          <button>Donate Now</button>
          <button>Watch more</button>
        </div>
      </div>
    </StyleHeader>
  );
};

export default HeaderComponent;
