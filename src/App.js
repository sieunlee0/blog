import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "블로그 글"

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color: "blue", fontSize: "30px" } }>
          개발 Blog</div>
      </div>
      <img src={ logo }></img>
      <h3> { posts } </h3>
    </div>
  );
}

export default App;
