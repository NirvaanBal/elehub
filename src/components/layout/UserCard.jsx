import { Link } from 'react-router-dom';
import './UserCard.scss';

function UserCard({ user }) {
  const { avatar_url, login } = user;

  return (
    <div className="user">
      <img src={avatar_url} alt={login} />

      <div className="info">
        <h4>{login}</h4>
        {/* <Link to={`users/${login}`}>Visit profile</Link> */}
      </div>
    </div>
  );
}

export default UserCard;
