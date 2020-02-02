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
      data-bg="linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/images/next-articles-background-image.png)"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
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
      fetchNextStepArticles: fetchNextStepArticles(contentService, step)
    },
    dispatch
  );
};
export default withContentService()(
  connect(null, mapDispatchToProps)(NextArticles)
);
