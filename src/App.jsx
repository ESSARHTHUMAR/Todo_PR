import CompleteTodo from "./components/CompleteTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import "./App.css"

function App() {
  return (
    <div className="mt-20">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<CompleteTodo />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
