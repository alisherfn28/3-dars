import React, { useState } from "react";
import img from "../../assets/images.svg";
import "./index.css";

function Header() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <header>
        <div className="container header_container">
          <div className="header_left">
            <div className="header_logo">
              <h2>Kino Ro'yxati</h2>
            </div>
            <nav>
              <ul className="menu">
                <li>
                  <a href="#">Bosh sahifa</a>
                </li>
                <li>
                  <a href="#">Kinolar</a>
                </li>
                <li>
                  <a href="#">Yangiliklar</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header_right">
            <img
              src={img}
              width="50px"
              alt="like"
              onClick={() => setLikes(likes + 1)}
            />
            <div className="header__right_title">
              <span>{likes}</span>
              <p>likes</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
