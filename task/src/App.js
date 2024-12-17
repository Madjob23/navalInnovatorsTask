import "./app.css";
import Header from "./components/Header/header";
import ProgressBar from "./components/ProgressBar/progressBar";
import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <section className="content">
        <Sidebar />
        <Main />
      </section>
    </div>
  );
}

export default App;
