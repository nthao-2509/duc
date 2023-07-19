import React from "react";
import { TagsStyled } from "./styled";

const Tags = (props: { title: string | undefined; tags: any[] }) => {
  return (
    <TagsStyled>
      {props.title && (
        <div className='title'>
          <h1>{props.title}</h1>
        </div>
      )}
      <div className='tags'>
        {props.tags.map((item: string, key: number) => (
          <p>{item}</p>
        ))}
      </div>
    </TagsStyled>
  );
};

export default Tags;
