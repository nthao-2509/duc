import BlogComponent from "components/clients/blogComponents";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import React from "react";

const BlogPages = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='Blog'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Blog",
            href: undefined,
          },
        ]}
      />
      <BlogComponent />
    </>
  );
};

export default BlogPages;
