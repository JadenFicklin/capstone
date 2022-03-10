import React from "react";
import "./LoginRegister.css";
import Nav from "./Nav";
import ReactPlayer from "react-player";
import Logo from "../pictures/S.mp4";

function LoginRegister() {
  const videoSrc = Logo;

  return (
    <>
      {/* <Nav /> */}
      <div className="outer">
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="left">
          <div className="create-account-picture"></div>
          <div className="create-account">
            <p className="create-account-text">create account</p>
          </div>
        </div>
        <div className="logo">
          <ReactPlayer
            url={videoSrc}
            playing={true}
            muted
            width={"342px"}
            height={"342px"}
          />
        </div>
        <div className="right">
          <div className="login-picture"></div>
          <div className="login"></div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;

{
  /* 
<button
  onClick={() => {
    navigate("/success");
  }}
>
  submit
</button> */
}
