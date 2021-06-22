import "./App.css";
import Dictionary from "./Dictionary";
import MOTSlogo from "./MOTSlogo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <a href="https://www.youtube.com" target="_open">
        <img src={MOTSlogo} className="App-logoimg-fluid" alt="logo"></img>
      </a>
      <div className="search-feature">
        <section>
          <h1>Mental Health Dictionary</h1>
          <h2>What would you like to learn more about today?</h2>
          <Dictionary />
        </section>
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
