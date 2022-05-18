import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import './Search.scss';

function Search() {
  const [text, setText] = useState('');
  const { users, loading, searchUsers } = useContext(GithubContext);

  const handleText = (e) => {
    setText(e.target.value);
    searchUsers(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for GitHub users..."
        autoFocus
        value={text}
        onChange={handleText}
      />
    </div>
  );
}

export default Search;
