import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setLogin }) {
  const navigate = useNavigate();

  const enter = (e) => {
    if (e.key === "Enter") {
      setLogin(true);
      navigate(`/`);
    }
  };

  const click = () => {
    setLogin(true);
    navigate(`/`);
  };

  return (
    <div className="login">
      <div className="language">
        <select>
          <option>한국어</option>
          <option>English</option>
          <option>日本語</option>
          <option>中文</option>
        </select>
      </div>
      <h1>NAVER</h1>
      <div className="login_box">
        <input type="text" placeholder="아이디 혹은 전화번호" />
        <input
          type="password"
          placeholder="비밀번호"
          onKeyDown={(e) => enter(e)}
        />
      </div>
      <div className="login_btn">
        <button type="button" onClick={click}>
          로그인
        </button>
      </div>

      <ul>
        <li>비밀번호 찾기</li>
        <li>아이디 찾기</li>
        <li>회원가입</li>
      </ul>
    </div>
  );
}

export default LogIn;
