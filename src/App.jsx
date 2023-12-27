import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;