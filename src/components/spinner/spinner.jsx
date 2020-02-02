import React, { Component } from "react";
import "./spinner.scss";

export default class Spinner extends Component {
  componentDidMount() {
    const preloader = document.getElementById("preload");
    function fadeOutnojquery(el) {
      el.style.opacity = 1;
      const interhellopreloader = setInterval(function() {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
          clearInterval(interhellopreloader);
          preloader.style.display = "none";
        }
      }, 16);
    }
    window.onload = function() {
      setTimeout(function() {
        fadeOutnojquery(preloader);
      }, 1000);
    };
  }

  render() {
    return (
      <div id="preloader">
        <div id="preload"></div>
      </div>
    );
  }
}
