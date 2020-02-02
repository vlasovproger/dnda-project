import React from "react";
import HeaderContainer from "../containers/header-container"

const NotFoundPage = () => {
  return (
    <HeaderContainer
      parent="page404"
      title="404 – PAGE NOT FOUND"
      imageUrl="/images/page-not-found-image.png"
      subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "
    />
  );
};

export default NotFoundPage;
