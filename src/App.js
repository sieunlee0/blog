import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('디저트 맛집 추천');

  let posts = "새로운 블로그 글"

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>2021년 9월 18일</p>
        <hr/>
      </div>

      
      
    </div>
  );
}

export default App;
