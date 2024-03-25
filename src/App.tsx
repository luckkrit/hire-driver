import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import "./App.css";
import { Modal2 } from "./components/Modal2";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Home />}>
          <Route path="/modal" element={<Modal />} />
        </Route>
        <Route path="/modal2" element={<Modal2 />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
          <Route path="modal2" element={<Modal2 />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
