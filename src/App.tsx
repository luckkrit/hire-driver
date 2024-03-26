import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { ModalLayout } from "./components/ModalLayout";
import { ScreenBookDate, ScreenBookNow } from "./components/Screen";
import { ModalProvider } from "./provider/ModalProvider";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <ModalProvider>
      <Routes location={background || location}>
        <Route element={<ModalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="booknow/:id" element={<ScreenBookNow />} />
          <Route path="bookdate/:id" element={<ScreenBookDate />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route element={<ModalLayout />}>
            <Route path="booknow/:id" element={<ScreenBookNow />} />
            <Route path="bookdate/:id" element={<ScreenBookDate />} />
          </Route>
        </Routes>
      )}
    </ModalProvider>
  );
}

export default App;
