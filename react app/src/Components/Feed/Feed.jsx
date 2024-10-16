import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons'; // Corrected import

export default function Feed({ fed }) {
  return (
    <div className="feed">
      <div className="top-content">
        <Link to='/profile/id'>
          <div className="user">
            <img src={fed.feedProfile} alt='' />
            <h5>{fed.name}</h5>
            <small>1 Minute Ago</small>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt='' />
      </div>
    </div>
  );
}
