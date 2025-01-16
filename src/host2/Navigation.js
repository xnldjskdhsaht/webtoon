import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation({ login, logout }) {
  const navigate = useNavigate();

  const search = (event) => {
    console.log(event.target.value);

    if (event.key == "Enter") {
      let Keyword = event.target.value;
      navigate(`/?q=${Keyword}`);
    }
  };

  return (
    <header>
      <h1>
        <Link to="/">
          <span>NAVER</span>웹툰
        </Link>
      </h1>
      <ul>
        <li>
          <input type="text" onKeyDown={(event) => search(event)} />
          <i className="xi-search"></i>
        </li>
        <li>
          <Link to="/Membership">
            <i className="xi-user"></i>
            <p>회원가입</p>
          </Link>
        </li>
        <li>
          {login ? (
            <button onClick={logout}>
              <i className="xi-user"></i>
              <p>로그아웃</p>
            </button>
          ) : (
            <Link to="/LogIn">
              <button>
                <i className="xi-user"></i>
                <p>로그인</p>
              </button>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
