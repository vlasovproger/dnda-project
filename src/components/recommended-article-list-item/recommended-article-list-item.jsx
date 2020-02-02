import React, { Component } from "react";
import Link from "next/link";
import moment from "moment";
import LazyLoad from "vanilla-lazyload";
import "./recommended-article-list-item.scss";

export default class RecommendedArticleListItem extends Component {
  componentDidMount() {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      });
    }
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }
  render() {
    const { imageUrl, title, id, category, date, author } = this.props;
    const backgroundUrl = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${imageUrl})`;
    return (
      <Link href="/article/[id]" as={`/article/${id}`}>
        <a>
          <div
            className="recommended-article-list-item lazy"
            data-bg={backgroundUrl}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className="recommended-article-list-item-content">
              <h2 className="recommended-article-title">{title}</h2>
              <h6 className="recommended-article-info">
                {moment(date).format("ll")} / {category} / {author}
              </h6>
            </div>
          </div>
        </a>
      </Link>
    );
  }
}
