import StartingCard from "./startingCard";
import HomePage from "./homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartingCard />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
