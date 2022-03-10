import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister";
import Success from "./components/Success";
import TopVideos from "./components/TopVideos";
import TV from "./components/TV";
import UploadVideo from "./components/UploadVideo";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/success" element={<Success />} />
        <Route path="/topvideos" element={<TopVideos />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/uploadvideo" element={<UploadVideo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
