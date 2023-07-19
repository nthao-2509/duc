import React from "react";
import { TopSessionStyle } from "./styles/TopSession";

const TopSession = (props: { title?: string; heading?: string }) => {
  return (
    <TopSessionStyle>
      <div className='top'>
        <div className='heading'>
          <h3>{props.heading}</h3>
        </div>
        <div className='title'>
          <h1>{props.title}</h1>
        </div>
      </div>
    </TopSessionStyle>
  );
};

export default TopSession;
