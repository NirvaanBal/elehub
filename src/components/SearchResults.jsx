import UserCard from './layout/UserCard';
import './SearchResults.scss';

function SearchResults({ users }) {
  return (
    <div className="results">
      {users.map((user) => (
        <UserCard user={user} key={user.login} />
      ))}
    </div>
  );
}

export default SearchResults;
