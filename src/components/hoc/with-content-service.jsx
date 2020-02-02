import React from "react";
import { ContentServiceConsumer } from "../content-service-context";

const withContentService = () => Wrapped => {
  return props => {
    return (
      <ContentServiceConsumer>
        {contentService => {
          return <Wrapped {...props} contentService={contentService} />;
        }}
      </ContentServiceConsumer>
    );
  };
};

export default withContentService;
