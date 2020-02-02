import React, { Component } from "react";
import { connect } from "react-redux";
import { withContentService } from "../hoc";
import HeaderContainer from "../../containers/header-container";
import ArticleContent from "../article-content";
import Spinner from "../spinner";
import "./article.scss";
import { bindActionCreators } from "redux";
import { fetchArticle, fetchArticles } from "../../actions";

class Article extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.id !== prevProps.currentArticle.id &&
      prevProps.currentArticle.id &&
      this.props.id
    ) {
      this.props.fetchArticle();
    }
  }
  componentDidMount() {
    this.props.fetchArticle();
    if (this.props.loading) {
      this.props.fetchArticles();
    }
  }

  render() {
    const {
      title,
      text,
      imageUrl,
      author,
      category
    } = this.props.currentArticle;
    const { id, loadingArticle, loading } = this.props;
    if (
      loadingArticle === true ||
      loadingArticle === null ||
      loading === true
    ) {
      return <Spinner />;
    } else {
      return (
        <>
          <HeaderContainer
            title={title}
            subTitle={`by ${author}`}
            imageUrl={imageUrl}
            parent="article"
          />
          <ArticleContent text={text} category={category} id={id} />
        </>
      );
    }
  }
}
const mapStateToProps = ({ currentArticle, loadingArticle, loading }) => ({
  currentArticle,
  loadingArticle,
  loading
});

const mapDispatchToProps = (dispatch, { contentService, id }) => {
  return bindActionCreators(
    {
      fetchArticle: fetchArticle(contentService, id),
      fetchArticles: fetchArticles(contentService)
    },
    dispatch
  );
};

export default withContentService()(
  connect(mapStateToProps, mapDispatchToProps)(Article)
);
