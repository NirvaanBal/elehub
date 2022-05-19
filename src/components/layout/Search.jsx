import { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/GithubContext';
import SearchResults from '../SearchResults';
import './Search.scss';

function Search() {
  const [text, setText] = useState('');
  const { users, loading, searchUsers } = useContext(GithubContext);

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    searchUsers(text);
  }, [text]);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for GitHub users..."
        autoFocus
        value={text}
        onChange={handleText}
      />
      {loading && <h3>Loading...</h3>}
      {users && users.length > 0 && <SearchResults users={users} />}
    </div>
  );
}

export default Search;
