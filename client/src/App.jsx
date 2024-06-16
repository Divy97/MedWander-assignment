import Form from "./components/Form";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="main_container">
      <Router>
        <div>
          <nav>
            <Link to="/formA">Form A</Link>
            <Link to="/formB">Form B</Link>
          </nav>
          <Routes>
            <Route path="/formA" element={<Form formType="A" />} />
            <Route path="/formB" element={<Form formType="B" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
