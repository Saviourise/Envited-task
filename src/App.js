import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventComponent from "./components/EventContext";

function App() {
  return (
    <EventComponent>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Create />} path="/create" />
          <Route element={<Event />} path="/event" />
        </Routes>
      </Router>
    </EventComponent>
  );
}

export default App;
