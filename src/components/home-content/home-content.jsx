import React, { Component } from "react";
import ArticleList from "../article-list";
import { connect } from "react-redux";
import NewsLetter from "../newsletter";
import NextArticles from "../next-articles";
import "./home-content.scss";
import { bindActionCreators } from "redux";
import { fetchArticles } from "../../actions";
import { withContentService } from "../hoc";
import Spinner from "../spinner";

class HomeContent extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    let classNamesMain = "";
    if (this.props.hamburgerToggled) {
      classNamesMain += "menu-active";
    }
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <main className={classNamesMain}>
          <ArticleList />
          <NextArticles step={this.props.step} />
          <NewsLetter />
        </main>
      );
    }
  }
}
const mapStateToProps = ({ hamburgerToggled, step, loading }) => ({
  hamburgerToggled,
  step,
  loading
});
const mapDispatchToProps = (dispatch, { contentService }) => {
  return bindActionCreators(
    {
      fetchArticles: fetchArticles(contentService)
    },
    dispatch
  );
};

export default withContentService()(
  connect(mapStateToProps, mapDispatchToProps)(HomeContent)
);
