import "./App.css";
import LeftBarNav from "./components/leftBarNav/leftbarNav";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <div className="layout-nav">
        <LeftBarNav />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
