import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { bindActionCreators } from "redux";
import { fetchNextStepArticles } from "../../actions";
import { withContentService } from "../hoc";
import "./article-buttons.scss";

class ArticleButtons extends Component {
  state = {
    prev: null,
    next: null,
  };
  componentDidMount() {
    this.findPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.articles !== prevProps.articles) {
      this.findPosts();
    }
  }

  findPosts = () => {
    const {
      currentArticle: { id },
      articles
    } = this.props;
    const idInArray = articles
      .map(article => {
        return article.id;
      })
      .indexOf(`${id}`);
    if (idInArray === -1) {
      this.props.fetchNextStepArticles();
    } else if (idInArray === articles.length - 1) {
      this.props.fetchNextStepArticles();
    } else {
      this.setState(state => {
        return {
          next: articles[idInArray + 1].id
        };
      });
      if (idInArray === 0) {
        this.setState(state => {
          return {
            prev: null
          };
        });
      } else {
        this.setState(state => {
          return {
            prev: articles[idInArray - 1].id
          };
        });
      }


    }
  };

  render() {
    const { prev, next } = this.state;
    let classNames = "article-buttons";
    if (prev === null) {
      classNames += " first";
    }
    return (
      <div className={classNames}>
        <Link href="/article/[id]" as={`/article/${prev}`}>
          <a aria-label="Previous articles">
            <div className="btn prev-article">Previous Article</div>
          </a>
        </Link>
        <Link href="/article/[id]" as={`/article/${next}`}>
          <a aria-label="Next articles">
            <div className="btn next-article">Next Article</div>
          </a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ currentArticle, articles }) => ({
  currentArticle,
  articles
});

const mapDispatchToProps = (dispatch, { contentService, step }) => {
  return bindActionCreators(
    {
      fetchNextStepArticles: fetchNextStepArticles(contentService, step)
    },
    dispatch
  );
};
export default withContentService()(
  connect(mapStateToProps, mapDispatchToProps)(ArticleButtons)
);
