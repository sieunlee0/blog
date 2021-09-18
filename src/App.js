import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "새로운 블로그 글"

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { posts } </h3>
        <p>2021년 9월 18일</p>
        <hr/>
      </div>

      
      
    </div>
  );
}

export default App;
