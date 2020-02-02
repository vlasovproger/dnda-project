import React, { Component } from "react";
import RecommendedArticleListItem from "../recommended-article-list-item";
import { connect } from "react-redux";
import "./recomended-article-list.scss";

class RecommendedArticleList extends Component {
  state = {
    posts: []
  };

  render() {
    const { articles, currentId } = this.props;
    let unchoosenPosts = [];
    let posts = [];
    if (articles.length) {
      unchoosenPosts = articles.filter(article => article.id !== currentId);
      const randCoff = Math.floor(Math.random() * (unchoosenPosts.length - 3));

      posts = [
        unchoosenPosts[randCoff],
        unchoosenPosts[randCoff + 1],
        unchoosenPosts[randCoff + 2]
      ];
    }
    return (
      <section id="recommended-articles">
        <hr className="up-hr" />
        <h3>See Also</h3>
        <ul className="article-list">
          {posts.map(post => {
            return (
              <li key={post.id}>
                <RecommendedArticleListItem
                  title={post.title}
                  imageUrl={post.imageUrl}
                  id={post.id}
                  author={post.author}
                  date={post.date}
                  category={post.category}
                />
              </li>
            );
          })}
        </ul>
        <hr className="down-hr" />
      </section>
    );
  }
}

const mapStateToProps = ({ articles }) => ({ articles });
export default connect(mapStateToProps, null)(RecommendedArticleList);
