import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Nav,
  Organization,
  Asset,
  History,
  Trade,
  Wallet,
} from "./action";

function App() {
  return (
    <div className="app sm:block">
      <Router>
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/asset" element={<Asset />} />
            <Route path="/history" element={<History />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
