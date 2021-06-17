import "./App.css";
import Dictionary from "./Dictionary";
import bookheader from "./bookheader.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={bookheader} className="App-logoimg-fluid" alt="logo"></img>
      <div className="search-feature shadow p-3 mb-5 bg-white rounded border border-danger w-75">
        <h1>Dictionary</h1>
        <h2>What would you like to learn more about today?</h2>
        <Dictionary />
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
