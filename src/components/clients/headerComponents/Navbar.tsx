import { dataNavbar } from "modules/data-fake";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarStyle } from "../styles/Navbar";
import { Divider, Dropdown, MenuProps, Popover, Space } from "antd";
import { StyleDropdownAccount } from "components/navbar/style";
import { DownOutlined } from "@ant-design/icons";
const NavbarClient = ({
  bgColor = "transparent",
  margin = "0 50px",
}: {
  bgColor?: string;
  margin?: string;
}) => {
  const items: MenuProps["items"] = [
    {
      label: <NavLink to='/auth/sign-in'>Sign In</NavLink>,
      key: "0",
    },
    {
      label: <NavLink to='/auth/sign-up'>Sign Up</NavLink>,
      key: "1",
    },
  ];
  const renderNavbar = (navbar: any) => {
    return navbar?.map((item: any, index: number) => {
      return (
        <li
          key={index}
          className={`nav__item ${item?.subMenu !== null && "menu__line"}`}
        >
          <a href={item?.path} className='transition'>
            {item.title}
          </a>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <a href={item?.path + subMenuParent?.path}>
                          {subMenuParent?.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <NavbarStyle bgColor={bgColor} margin={margin}>
      <div className='navbar'>
        <div className='logo'>
          <h1>FANTASTIC5</h1>
        </div>
        <div className='menu'>
          <ul className='nav'>
            {renderNavbar(dataNavbar)}
            <li className='user'>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <i className='fa-regular fa-user'></i>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default NavbarClient;
