import UserCard from './UserCard';

function SearchResults({ users }) {
  return users.map((user) => <UserCard key={user.login} />);
}

export default SearchResults;
