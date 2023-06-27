import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom"

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = ()=>{
    navigate(`/gigs?search=${input}`)
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the Perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="serachInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="Try building mobile app"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Wordpress</button>
            <button>Logo design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
