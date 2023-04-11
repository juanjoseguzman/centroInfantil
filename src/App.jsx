import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { Home } from "./views/Home/Home";
import QueOfrecemos from "./views/QueOfrecemos/QueOfrecemos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ofrecemos" element={<QueOfrecemos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
