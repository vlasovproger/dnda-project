import React, { Component } from "react";
import HeaderContainer from "../../containers/header-container/";
import { connect } from "react-redux";
import "./ambassadors.scss";

class Ambassadors extends Component {
  render() {
    let classNamesMain = "";
    if (this.props.hamburgerToggled) {
      classNamesMain += "menu-active";
    }
    return (
      <>
        <HeaderContainer
          parent="ambassadors"
          title="Welcome to DNDA"
          subTitle="Join Dandelion to discover a world of remarkable stories, told by some of the most inspiring photographers, writers, and 
adventurers on the planet, and to publish and share your stories as part of our thoughtful community."
          imageUrl="/images/ambassadors-background-image.jpg"
        />
        <main className={classNamesMain}>
          <section id="ambassadors">
            <div className="wrapper">
              <div className="section-title">
                <div className="title">DNDA Ambassadors</div>
                <div className="description">
                  Meet the amazing individuals whose work and approach to life
                  has inspired us and our community, and who are helping shape
                  Dandelion into a beautiful, ever-growing record of life on
                  this planet, to be shared with the generations to come.
                </div>
              </div>
              <ul>
                <li>
                  <img src="/images/avatars/avatar-1.png" alt="avatar" />
                  <h3>Julia Moore</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </li>
                <li>
                  <img src="/images/avatars/avatar-2.png" alt="avatar" />
                  <h3>Andy Crowe</h3>
                  <p>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat.
                  </p>
                </li>
                <li>
                  <img src="/images/avatars/avatar-3.png" alt="avatar" />
                  <h3>Miranda Jane</h3>
                  <p>
                    Mirum est notare quam littera gothica, quam nunc putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta decima et quinta decima. Eodem modo typree.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </>
    );
  }
}
const mapStateToProps = ({ hamburgerToggled }) => ({ hamburgerToggled });

export default connect(mapStateToProps, null)(Ambassadors);
