import MapScreen from "./Components/MapScreen";
import AnimalList from "./Components/AnimalList";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapScreen/>}/>
        <Route path="/animallist" element={<AnimalList />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
