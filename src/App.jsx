import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
      <a href="#home">
        {" "}
        <button className="btn top-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      </a>
    </>
  );
}

export default App;
