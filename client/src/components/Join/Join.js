import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [ermsg, setErMsg] = useState(false);

  return (
    <div>
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div style={{color:"white", paddingBottom:"100px", paddingTop:"0px", fontSize:"50px", fontFamily:"serif", fontWeight:"bold"}}><center><span><img src={window.location.origin + "/logo.jpg"} alt="logo" height="40px" width="40px" className="logo" /></span> Live Chatroom</center></div>
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        {ermsg && <div className="ermsg">Enter proper details!</div>}
        <Link onClick={(e) => {if(!name || !room) {e.preventDefault(); setErMsg(true);}}} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
        <p style={{color:"white", paddingTop:"15px"}}><center>Copyright &copy;</center></p>
      </div>
    </div>
    </div>
  );
}