import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBox from "./components/SearchBox";

function App() {

  return (
    <div className="App">
      <h1>React App</h1>
      <SearchBox />
      <BrowserRouter>
        <div>
          
        </div>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
