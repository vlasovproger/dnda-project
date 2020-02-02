const articlesRequested = () => {
  return {
    type: "FETCH_ARTICLES_REQUEST"
  };
};

const articlesLoaded = articles => {
  return {
    type: "FETCH_ARTICLES_SUCCESS",
    payload: articles
  };
};

const articlesError = error => {
  return {
    type: "FETCH_ARTICLES_FAILURE",
    payload: error
  };
};
const articleRequested = () => {
  return {
    type: "FETCH_ARTICLE_REQUEST"
  };
};

const articleLoaded = article => {
  return {
    type: "FETCH_ARTICLE_SUCCESS",
    payload: article
  };
};

const articleError = error => {
  return {
    type: "FETCH_ARTICLE_FAILURE",
    payload: error
  };
};

const nextStepArticlesRequested = () => {
  return {
    type: "NEXT_STEP_ARTICLES_REQUEST"
  };
};

const nextStepArticlesLoaded = articles => {
  return {
    type: "NEXT_STEP_ARTICLES_SUCCESS",
    payload: articles
  };
};

const nextStepArticlesError = error => {
  return {
    type: "NEXT_STEP_ARTICLES_FAILURE",
    payload: error
  };
};

const toggleHamburgerMenu = () => {
  return {
    type: "TOGGLE_HAMBURGER_MENU"
  };
};

const fetchArticles = contentService => () => dispatch => {
  dispatch(articlesRequested());
  contentService
    .getArticles()
    .then(data => dispatch(articlesLoaded(data)))
    .catch(err => dispatch(articlesError(err)));
};
const fetchNextStepArticles = (contentService, step) => () => dispatch => {
  dispatch(nextStepArticlesRequested());
  contentService
    .getArticles(step)
    .then(data => dispatch(nextStepArticlesLoaded(data)))
    .catch(err => dispatch(nextStepArticlesError(err)));
};

const fetchArticle = (contentService, id) => () => dispatch => {
  dispatch(articleRequested());
  contentService
    .getArticle(id)
    .then(data => dispatch(articleLoaded(data)))
    .catch(err => dispatch(articleError(err)));
};

export {
  fetchArticles,
  fetchArticle,
  toggleHamburgerMenu,
  fetchNextStepArticles
};
