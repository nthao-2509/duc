import React from "react";
import { FooterStyled } from "./styles/Footer";
import Container from "./Container";
import { NavLink } from "react-router-dom";

const data = [
  {
    type: "info",
    title: "Our Head Office",
    content: [
      {
        icon: <i className='fa-solid fa-location-pin'></i>,
        title: "xxx Street, FPT",
        href: "",
      },
      {
        icon: <i className='fa-solid fa-envelope'></i>,
        title: "info@example.com",
        href: "",
      },
      {
        icon: <i className='fa-solid fa-phone'></i>,
        title: "+012 345 67890",
        href: "",
      },
    ],
  },
  {
    type: "list",
    title: "Popular Links",
    content: [
      {
        href: "",
        title: "About Us",
      },
      {
        href: "",
        title: "Contact Us",
      },
      {
        href: "",
        title: "Popular Causes",
      },
      {
        href: "",
        title: "Upcoming Events",
      },
      {
        href: "",
        title: "Latest Blog",
      },
    ],
  },
  {
    type: "list",
    title: "Useful Links",
    content: [
      {
        href: "",
        title: "Terms of use",
      },
      {
        href: "",
        title: "Privacy policy",
      },
      {
        href: "",
        title: "Cookies",
      },
      {
        href: "",
        title: "Help",
      },
      {
        href: "",
        title: "FQAs",
      },
    ],
  },
];

const FooterClient = () => {
  return (
    <FooterStyled>
      <Container>
        <div className='items'>
          {data.map((item: any, key: number) => (
            <div className='item' key={key}>
              <div className='title'>
                <h1>{item.title}</h1>
              </div>
              <ul>
                {item.content.map((content: any, keyContent: number) => (
                  <li key={keyContent}>
                    <NavLink to={content.href} className='link'>
                      {item.type === "info" ? (
                        <>{content.icon}</>
                      ) : (
                        <i className='fa-solid fa-angle-right'></i>
                      )}

                      <p>{content.title}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='item'>
            <div className='title'>
              <h1>Newsletter</h1>
            </div>
            <div className='input'>
              <input type='text' placeholder='Email goes here' />
            </div>
            <div className='button'>
              <button>Submit</button>
            </div>
            <p>Don’t worry, we don’t spam!</p>
          </div>
        </div>
        <div className='bottom'>
          <p>© FantasticV, All Right Reserved.</p>
          <p>Designed By FantasticV</p>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default FooterClient;
