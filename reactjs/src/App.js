import MapScreen from "./Components/MapScreen";
import AnimalList from "./Components/AnimalList";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Route path="/" element={<MapScreen />} exact />
        <Route path="/animallist" element={<AnimalList />} exact />
      </BrowserRouter> */}
      <MapScreen />
    </div>
  );
}

export default App;
