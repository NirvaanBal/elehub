import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import GithubContext from '../context/GithubContext';
import './User.scss';

function User() {
  const { user, loading, getUser } = useContext(GithubContext);
  const { login } = useParams();

  const { name, avatar_url } = user;

  useEffect(() => {
    getUser(login);
  }, [login]);

  return (
    <div className="profile">
      <figure>
        <Link to="/">
          <FaArrowLeft color="#000" />
        </Link>
        <img src={avatar_url} alt={login} />
      </figure>
      <h2>{user.name}</h2>
    </div>
  );
}

export default User;
