import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Success() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div>Success!</div>
      <button
        onClick={() => {
          navigate("/tv");
        }}
      >
        continue to TV
      </button>
    </>
  );
}

export default Success;
