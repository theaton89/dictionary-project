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
        rel="noreferrer"
      >
        <img src={MOTSlogox} className="App-logoimg-fluid" alt="logo"></img>
      </a>
      <div className="search-feature">
        <Dictionary defaultKeyword="autism" />
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA"
          target="_blank"
          rel="noreferrer"
        >
          Taylor Heaton
        </a>
        {","}{" "}
        <a
          href="https://github.com/theaton89/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://hardcore-newton-2875a1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
