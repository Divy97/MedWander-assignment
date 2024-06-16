import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Excel from "./components/Excel";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <nav className="bg-slate-500 p-4 flex align-middle justify-between">
          <Link
            className="text-white px-4 text-2xl font-mono font-extrabold py-2 rounded-md hover:bg-slate-600"
            to="/"
          >
           MedWander
          </Link>
          <div className="flex align-middle justify-center">
            <Link
              className="text-white px-4 py-2 rounded-md hover:bg-slate-600"
              to="/formA"
            >
              Form A
            </Link>
            <Link
              className="text-white px-4 py-2 rounded-md hover:bg-slate-600"
              to="/formB"
            >
              Form B
            </Link>
            <Link
              className="text-white px-4 py-2 rounded-md hover:bg-slate-600"
              to="/excel"
            >
              Excel Data
            </Link>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
          <Route path="/" element={<Excel />} />
            <Route path="/formA" element={<Form formType="A" />} />
            <Route path="/formB" element={<Form formType="B" />} />
            <Route path="/excel" element={<Excel />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
