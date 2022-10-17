import MapScreen from "./Components/MapScreen";

import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
