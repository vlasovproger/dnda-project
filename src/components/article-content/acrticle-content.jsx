import React from "react";
import ReplyForm from "../reply-form";
import RecommendedArticleList from "../recomended-article-list";
import NewsLetter from "../newsletter";
import { connect } from "react-redux";
import ArticleButtons from "../article-buttons";
import "./acrticle-content.scss";

const ArticleContent = ({ text, category, id, hamburgerToggled, step }) => {
  let classNamesMain = "";
  if (hamburgerToggled) {
    classNamesMain += "menu-active";
  }
  return (
    <main className={classNamesMain}>
      <section id="article-content">
        <div className="wrapper">
          <h3 className="categories">{`Category: ${category}`}</h3>
          <p className="article-text">{text}</p>
          <ArticleButtons step={step}/>
        </div>
      </section>
      <RecommendedArticleList currentId={id} />
      <ReplyForm />
      <NewsLetter />
    </main>
  );
};

const mapStateToProps = ({ hamburgerToggled, step }) => ({ hamburgerToggled, step });

export default connect(mapStateToProps, null)(ArticleContent);
