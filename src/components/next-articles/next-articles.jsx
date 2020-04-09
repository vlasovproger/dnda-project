import React from "react";
import { connect } from "react-redux";
import { fetchNextStepArticles } from "../../actions";
import { bindActionCreators } from "redux";
import { withContentService } from "../hoc";
import "./next-articles.scss";

const NextArticles = ({ fetchNextStepArticles }) => {
  return (
    <section
      id="next-articles"
      className="lazy"
      data-bg="/images/next-articles-background-image.jpg"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3>Explore the world from a new perspective</h3>
      <div className="next-articles-button" onClick={fetchNextStepArticles}>
        Read more stories
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch, { contentService, step }) => {
  return bindActionCreators(
    {
      fetchNextStepArticles: fetchNextStepArticles(contentService, step),
    },
    dispatch
  );
};
export default withContentService()(
  connect(null, mapDispatchToProps)(NextArticles)
);
