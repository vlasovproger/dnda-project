import React from "react";
import Link from "next/link";
import { Parallax } from "react-parallax";
import "./header.scss";

const Header = ({
  classNamesHeader,
  navShadow,
  classNamesHam,
  onHamburgerToggle,
  classNamesNav,
  title,
  subTitle,
  parent,
  imageUrl
}) => {
  return (
    <header className={classNamesHeader}>
      <Parallax
        bgImage={imageUrl}
        bgImageAlt="paralax header image"
        strength={500}
      >
        <div className="wrapper">
          <nav className={navShadow}>
            <div
              id="menu-hamburger"
              className={classNamesHam}
              onClick={onHamburgerToggle}
            >
              <div className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <img
              className="logo-image"
              src="/images/logo.png"
              alt="logo"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
            />
            <Link href="/ambassadors" prefetch={false}>
              <a aria-label="Ambassadors">
                <div className="ambassadors">Ambassadors</div>
              </a>
            </Link>
            <ul className={classNamesNav}>
              <li>
                <div className="mobile-icon" onClick={onHamburgerToggle}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </li>
              <li>
                <Link href="/" prefetch={false}>
                  <a onClick={onHamburgerToggle}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  <a onClick={onHamburgerToggle}>About Me</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  <a onClick={onHamburgerToggle}>Contact</a>
                </Link>
              </li>
              <li className="ambassadors-nav-item">
                <Link href="/ambassadors" prefetch={false}>
                  <a onClick={onHamburgerToggle}>Ambassadors</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div id="hero-section">
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {parent}
          </div>
        </div>
      </Parallax>
    </header>
  );
};

export default Header;
