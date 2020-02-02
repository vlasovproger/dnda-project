import React from "react";
import Link from 'next/link';
import moment from "moment";
import LazyImage  from "../lazy-image";
import "./article-list-item.scss";

const ArticleListItem = ({ imageUrl, title, id, category, date, author }) => {

  return (
    <div className="article-list-item">
      <LazyImage src={imageUrl} alt="Article" />
      <div className="article-list-item-content">
        <h2 className="article-title">{title}</h2>
        <h6 className="article-info">
          {moment(date).format("ll")} / {category} / {author}
        </h6>
        <Link href="/article/[id]" as={`/article/${id}`} prefetch={false}>
          <div className="read-article-btn">Read Article</div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleListItem;
