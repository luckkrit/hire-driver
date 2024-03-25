import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import "./App.css";
import { ModalLayout } from "./components/ModalLayout";
import Gallery from "./components/Gallery";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route element={<ModalLayout />}>
          <Route path="modal/:id" element={<Gallery />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route element={<ModalLayout />}>
            <Route path="modal/:id" element={<Gallery />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
