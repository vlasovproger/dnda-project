import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleHamburgerMenu } from "../../actions";
import LazyLoad from "vanilla-lazyload";
import Header from "../../components/header";


export class HeaderContainer extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      });
    }
    document.lazyLoadInstance.update();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  state = {
    navShadow: ""
  };
  handleToArticle = () => {
    window.scrollTo({
      top: document.querySelector("main").offsetTop - 100,
      behavior: "smooth"
    });
  };
  handleScroll = () => {
    const windowTop = window.scrollY;

    windowTop > 300
      ? this.setState(({ navShadow }) => {
          return {
            navShadow: "navShadow"
          };
        })
      : this.setState(({ navShadow }) => {
          return {
            navShadow: ""
          };
        });
  };
  parentButton(parent) {
    switch (parent) {
      case "page404":
        return (
          <Link href="/">
            <a>
              <div className="to-articles">Go to homepage</div>
            </a>
          </Link>
        );
      case "ambassadors":
        return (
          <Link href="/">
            <a>
              <div className="to-articles">Go to homepage</div>
            </a>
          </Link>
        );
      case "about":
        return null;
      case "contact":
        return null;
      default:
        return (
          <div className="to-articles" onClick={this.handleToArticle}>
            To Articles
          </div>
        );
    }
  }
  render() {
    const {
      title,
      subTitle,
      imageUrl,
      onHamburgerToggle,
      parent,
      hamburgerToggled
    } = this.props;
    let classNamesHam = "";
    let classNamesHeader = "lazy";
    let classNamesNav = "nav-items";
    if (hamburgerToggled) {
      classNamesHam += " closeMenu";
      classNamesHeader += " menu-active";
      classNamesNav += " menu-active";
    }
    if (this.props.parent) {
      classNamesHeader += " " + parent;
    }


    return (
      <Header
        classNamesHam={classNamesHam}
        classNamesHeader={classNamesHeader}
        classNamesNav={classNamesNav}
        parent={this.parentButton(parent)}
        onHamburgerToggle={onHamburgerToggle}
        subTitle={subTitle}
        title={title}
        imageUrl={imageUrl}
        navShadow={this.state.navShadow}
      />
    );
  }
}

const mapStateToProps = ({ hamburgerToggled }) => ({
  hamburgerToggled
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onHamburgerToggle: toggleHamburgerMenu
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
