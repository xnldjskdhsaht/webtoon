import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import WebtoonAll from "./WebtoonAll";
import Navigation from "./Navigation";
import WebtoonList from "./WebtoonList";
import WebtoonDetail from "./WebtoonDetail";
import Membership from "./Membership";
import LogIn from "./LogIn";
import "./App.scss";

function App() {
  const [login, setLogin] = useState(false);

  const logout = () => {
    setLogin(false);
  };

  const Private = () => {
    return login == true ? <WebtoonDetail /> : <Navigate to="/LogIn" />;
  };

  return (
    <div>
      {/* 
        1. 전체 상품 페이지 , 로그인 , 상품 상세페이지 

        2. 3단
        상 - 로그인 
        중 - 로고
        하 - 메뉴검색

        3. 기본 전체 상품페이지
        4. 로그인 클릭 시 로그인 페이지
        5. 상품 클릭 시 상품 디테일페이지
        로그인이 되어있지않은경우 로그인페이지 
        로그인이 되어있을 때 상품 디테일 페이지를 볼 수 있게

        6. 검색기능

      */}
      <Navigation login={login} logout={logout} />
      <Routes>
        <Route path="/" element={<WebtoonList />} />
        <Route path="/webtoon/:id" element={<Private />} />
        <Route path="/Membership" element={<Membership />}></Route>
        <Route
          path="/LogIn"
          element={<LogIn login={login} setLogin={setLogin} logout={logout} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
