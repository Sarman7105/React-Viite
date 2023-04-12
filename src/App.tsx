import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NoMatch } from "./pages/notfound";
import "./styles/global.scss";
import "@fontsource/dm-sans";
import { Home } from "./pages/home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
