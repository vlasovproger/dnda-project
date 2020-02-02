import React, { Component } from "react";
import HeaderContainer from "../../containers/header-container/";
import NewsLetter from "../newsletter";
import { connect } from "react-redux";
import "./contact.scss";

class Contact extends Component {
  render() {
    let classNamesMain = "";
    if (this.props.hamburgerToggled) {
      classNamesMain += "menu-active";
    }
    return (
      <>
        <HeaderContainer
          title="Find me on"
          subTitle={null}
          imageUrl="/images/contact-background-image.png"
          parent="contact"
        />
        <main className={classNamesMain}>
          <section id="contact-content">
            <p>
              Interested in collaborating with us? Write us a short message, we
              will get back to you!
            </p>
            <form>
              <div className="info">
                <input
                  type="text"
                  placeholder="Your Name (Required)"
                  name="nickname"
                  aria-label="enter name"
                />
                <input
                  type="email"
                  placeholder="Your E-mail Address"
                  name="email"
                  aria-label="enter email"
                />
              </div>

              <textarea
                placeholder="Message (optional)"
                name="message"
                id="message"
                cols="30"
                rows="10"
                aria-label="enter message"
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </section>
          <NewsLetter />
        </main>
      </>
    );
  }
}

const mapStateToProps = ({ hamburgerToggled }) => ({ hamburgerToggled });

export default connect(mapStateToProps, null)(Contact);
