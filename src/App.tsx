import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import FocusAreasPage from "@/pages/focus-areas";
import MyTestsPage from "@/pages/my-tests";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<FocusAreasPage />} path="/focus" />
      <Route element={<MyTestsPage />} path="/tests" />
    </Routes>
  );
}

export default App;
