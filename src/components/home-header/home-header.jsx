import React, { Component } from "react";
import Header from "../header";
import HeaderContainer from "../../containers/header-container/";
import "./home-header.scss";

export class HomeHeader extends Component {
  render() {
    return (
      <HeaderContainer
        title="Welcome to a world of stories"
        subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat."
        imageUrl="/images/header-background-image.jpg"
      />
    );
  }
}

export default HomeHeader;
