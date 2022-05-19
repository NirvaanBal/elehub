import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import GithubContext from '../context/GithubContext';
import './User.scss';

function User() {
  const { user, loading, getUser } = useContext(GithubContext);
  const { login } = useParams();

  const { name, avatar_url, bio, location, public_repos, html_url } = user;

  useEffect(() => {
    getUser(login);
  }, [login]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="profile">
      <figure>
        <Link to="/">
          <FaArrowLeft className="back" color="#000" />
        </Link>
        <img src={avatar_url} alt={login} />
        <div className="info">
          <h2>{name}</h2>
          <p className="bio">{bio}</p>
          <p className="location">{location}</p>
          <p className="repos">Public Repositories: {public_repos}</p>
          <a href={html_url} target="_blank">
            Visit Github
          </a>
        </div>
      </figure>
    </div>
  );
}

export default User;
