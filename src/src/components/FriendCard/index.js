import React from 'react';
import './style.css';

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.imageClick} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
            <strong>Occupation:</strong> {props.occupation}
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> */}
      {/* 𝘅 */}
      {/* </span> */}
    </div>
  );
}

export default FriendCard;
