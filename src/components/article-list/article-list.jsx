import React, { Component } from "react";
import ArticleListItem from "../article-list-item";
import { connect } from "react-redux";
import "./article-list.scss";

class ArticleList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul className="article-list">
        {articles.map(article => {
          return (
            <li key={article.id}>
              <ArticleListItem
                title={article.title}
                imageUrl={article.imageUrl}
                id={article.id}
                author={article.author}
                date={article.date}
                category={article.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = ({ articles }) => ({ articles });
export default connect(mapStateToProps, null)(ArticleList);
