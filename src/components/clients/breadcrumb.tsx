import React from "react";
import { BreadcrumbStyle } from "./styles/Breadcrumb";
import { NavLink } from "react-router-dom";

const Breadcrumb = (props: {
  breadcrumb: {
    href: string | undefined;
    title: string;
  }[];
}) => {
  return (
    <BreadcrumbStyle>
      <ul>
        {props.breadcrumb.map(
          (
            item: {
              href: string | undefined;
              title: string;
            },
            index: number
          ) => (
            <li key={index}>
              {item.href ? (
                <NavLink to={item.href}>{item.title}&nbsp;/&nbsp;</NavLink>
              ) : (
                <p>{item.title}</p>
              )}
            </li>
          )
        )}
      </ul>
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;
