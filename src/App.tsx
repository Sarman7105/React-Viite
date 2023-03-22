import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./components/layout";
import { Home } from "./pages/home";
import { Registration } from "./pages/registration";
import { Status } from "./pages/status";
import { NoMatch } from "./pages/notfound";
import { QrGeneration } from "./pages/qrCodeGeneration";
import "./styles/global.scss";
import "@fontsource/dm-sans";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="status" element={<Status />} />
        <Route path="generate-qr" element={<QrGeneration />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
