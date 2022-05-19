const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'REMOVE_USERS':
      return {
        ...state,
        loading: false,
        users: [],
      };
    case 'GET_USER':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default GithubReducer;
