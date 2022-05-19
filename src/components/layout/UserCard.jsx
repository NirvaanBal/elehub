import { Link } from 'react-router-dom';
import './UserCard.scss';

function UserCard({ user }) {
  const { avatar_url, login } = user;

  return (
    <div className="user">
      <img loading="lazy" src={avatar_url} alt={login} />

      <div className="info">
        <h4>{login}</h4>
        <Link to={`users/${login}`}>Visit Profile</Link>
      </div>
    </div>
  );
}

export default UserCard;
