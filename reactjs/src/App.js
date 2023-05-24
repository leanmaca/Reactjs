import MapScreen from "./Components/MapScreen";

import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import AnimalList from "./Components/AnimalList";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<MapScreen />} /> */}
          <Route path="/animallist" element={<AnimalList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
