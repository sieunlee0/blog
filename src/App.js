/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState("디저트 맛집 추천");
  let [글제목2, 글제목변경2] = useState("꿀잠 자는 법");
  let [글제목3, 글제목변경3] = useState("홈트 유튜버 추천");
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } <span onClick={ ()=>{ 좋아요변경(좋아요 +1) } }>👍</span> {좋아요} </h3>
        <p>2021년 9월 18일</p>
        <hr/>

        <h3> { 글제목2 } </h3>
        <p>2021년 9월 23일</p>
        <hr/>

        <h3> { 글제목3 } </h3>
        <p>2021년 9월 30일</p>
        <hr/>

        <button onClick={ ()=>{ 글제목변경("음료수 맛집 추천"), 글제목변경2("학교에서 꿀잠 자는 법"), 글제목변경3("개발 유튜버 추천") } }>click!</button>
      </div>

      
      
    </div>
  );
}

export default App;
