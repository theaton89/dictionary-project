import "./App.css";
import Dictionary from "./Dictionary";
import MOTSlogox from "./MOTSlogox.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <a
        href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA"
        target="_open"
      >
        <img src={MOTSlogox} className="App-logoimg-fluid" alt="logo"></img>
      </a>
      <div className="search-feature">
        <Dictionary defaultKeyword="meditation" />
      </div>
      <footer>
        Coded by{" "}
        <a href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA">
          Taylor Heaton
        </a>
        {","}{" "}
        <a href="https://github.com/theaton89/dictionary-project">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://hardcore-newton-2875a1.netlify.app/">
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
