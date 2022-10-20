import "./App.css";
import { Routes, Route } from "react-router-dom";
import Format from "./routes/format/format.routes";
import Home from "./routes/home/home.component";
import Error404 from "./routes/error-404/error-404.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Format />}>
        <Route index element={<Home />} />
        <Route path="/characters/:id" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
