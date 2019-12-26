import React from 'react';
import './avatar.css';

function Contact(props) {
  return (
    <div className="Contact">
     <img className="avatar" src={props.image} alt="avatar"/>
      <div className="status">
        <div className="textuel">
          <h4 className="name">{props.firstname} {props.lastname}</h4>
        </div>
        <div class="flex">
          <div className={props.online ? "status-online" : "status-offline"}> </div>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p></div>
      </div>

    </div>
  );
}
export default Contact;

