import React from "react";
import { PaginationStyled } from "./styles/Pagination";

const Pagination = (props: { length: number; active: number }) => {
  return (
    <PaginationStyled>
      <div className='prev'>
        <button>Previous</button>
      </div>
      <div className='items'>
        {Array.from({ length: props.length }).map((item: any, index) => (
          <button className={`${props.active === index + 1 ? "active" : ""}`}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className='next'>
        <button>Next</button>
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
