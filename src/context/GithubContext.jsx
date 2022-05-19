import { useState, createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubPovider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
  const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

  const searchUsers = async (text) => {
    if (text.trim() === '') {
      dispatch({ type: 'REMOVE_USERS' });
      return;
    }

    dispatch({ type: 'SET_LOADING' });
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: 'SEARCH_USERS', payload: items });
  };

  const getUser = async (login) => {
    dispatch({ type: 'SET_LOADING' });
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: 'GET_USER', payload: data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
