import UserCard from './UserCard';

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
