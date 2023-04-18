import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
