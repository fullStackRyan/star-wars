import "./App.css";
import { Routes, Route } from "react-router-dom";
import Format from "./routes/format/format.routes";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Format />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
