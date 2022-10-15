import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ENG from './ENG'
function App() {
  return (
    //react router
    <div>
      <Router>
        <Routes>
          <Route index element={<ENG/>}/>
        </Routes>
      </Router>
    </div>        
  );
}

export default App;
