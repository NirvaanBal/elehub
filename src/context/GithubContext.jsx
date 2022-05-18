import { useState, createContext } from 'react';

const GithubContext = createContext();

export const GithubPovider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
  const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

  const searchUsers = async (text) => {
    if (text.trim() === '') {
      setUsers([]);
      return;
    }

    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    setLoading(false);

    setUsers(items);
  };

  return (
    <GithubContext.Provider value={{ users, loading, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
