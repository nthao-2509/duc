import React from "react";
import { AboutUsHomeStyle } from "../styles/AboutHome";
import { Tabs, TabsProps } from "antd";
import Container from "../Container";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `About`,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt provident modi velit ad quod aut odio qui vero animi dignissimos, quos, odit suscipit possimus, repellat ullam doloremque numquam maiores eum!`,
  },
  {
    key: "2",
    label: `Mission`,
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at omnis dolor id! Nostrum porro consequatur velit esse, obcaecati error ipsum atque veniam magni corporis rem reiciendis quos minus perferendis!`,
  },
  {
    key: "3",
    label: `Vision`,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit ipsa quas doloribus dolore veritatis corporis atque, dicta magnam neque distinctio aut aliquid corrupti? Et, maiores. Nobis voluptate distinctio molestiae.`,
  },
];

const AboutUsHome = () => {
  return (
    <AboutUsHomeStyle>
      <Container>
        <div className='about'>
          <div className='left'>
            <img src='/images/aboutus-image.png' alt='' />
          </div>
          <div className='right'>
            <div className='heading'>
              <h3>Learn About Us</h3>
            </div>
            <div className='title'>
              <h1>Worldwide non-profit charity organization</h1>
            </div>
            <div className='tabs'>
              <Tabs defaultActiveKey='1' items={items} />
            </div>
          </div>
        </div>
      </Container>
    </AboutUsHomeStyle>
  );
};

export default AboutUsHome;
