import "./App.css";
import Dictionary from "./Dictionary";
import newMOTSlogo from "./newMOTSlogo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <a
        href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA"
        target="_open"
        rel="noreferrer"
        title="Mom on the Spectrum site"
      >
        <img
          src={newMOTSlogo}
          className="App-logoimg-fluid"
          alt="Mom on the Spectrum logo"
        ></img>
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
          title="Taylor Heaton's site"
        >
          Taylor Heaton
        </a>
        {","}{" "}
        <a
          href="https://github.com/theaton89/dictionary-project"
          target="_blank"
          rel="noreferrer"
          title="Taylor Heaton's Github"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://hardcore-newton-2875a1.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Taylor Heaton's Netlify site"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
