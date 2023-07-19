import { Collapse, CollapseProps } from "antd";
import React from "react";
import { CategoriesStyle } from "./styled";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Categories = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className='title__collapse'>
          <p>National</p>
          <p>(98)</p>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: (
        <div className='title__collapse'>
          <p>Informational </p>
          <p>(87)</p>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: (
        <div className='title__collapse'>
          <p>Trades</p>
          <p>(67)</p>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: (
        <div className='title__collapse'>
          <p>Lifestyle</p>
          <p>(91)</p>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: (
        <div className='title__collapse'>
          <p>Technology</p>
          <p>(107)</p>
        </div>
      ),
      children: <p>{text}</p>,
    },
  ];
  return (
    <CategoriesStyle>
      <div className='title'>
        <h1>Categories</h1>
      </div>
      <Collapse items={items} defaultActiveKey={["1"]} />
    </CategoriesStyle>
  );
};

export default Categories;
