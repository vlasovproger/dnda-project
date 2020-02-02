const reducer = (state, action) => {
  if (!state) {
    return {
      ...state,
      articles: [],
      currentArticle: {},
      loading: true,
      loadingArticle: null,
      loadingNextArticles: false,
      error: null,
      hamburgerToggled: false,
      step: 2
    };
  }
  switch (action.type) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        articles: [],
        loading: true,
        error: null
      };
    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        articles: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_ARTICLES_FAILURE":
      return {
        ...state,
        articles: [],
        loading: false,
        error: action.payload
      };
    case "FETCH_ARTICLE_REQUEST":
      return {
        ...state,
        currentArticle: {},
        loadingArticle: true,
        error: null
      };
    case "FETCH_ARTICLE_SUCCESS":
      return {
        ...state,
        currentArticle: action.payload,
        loadingArticle: false,
        error: null
      };
    case "FETCH_ARTICLE_FAILURE":
      return {
        ...state,
        currentArticle: {},
        loadingArticle: false,
        error: action.payload
      };
    case "TOGGLE_HAMBURGER_MENU":
      return {
        ...state,
        hamburgerToggled: !state.hamburgerToggled
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };
    case "NEXT_STEP_ARTICLES_REQUEST":
      return {
        ...state,
        loadingNextArticles: true,
        error: null
      };
    case "NEXT_STEP_ARTICLES_SUCCESS":
      return {
        ...state,
        articles: [ ...state.articles, ...action.payload ],
        loadingNextArticles: false,
        step: state.step + 1,
        error: null
      };
    case "NEXT_STEP_ARTICLES_FAILURE":
      return {
        ...state,
        loadingNextArticles: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
