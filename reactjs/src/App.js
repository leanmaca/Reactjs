import MapScreen from "./Components/MapScreen";
import AnimalList from "./Components/AnimalList";
import AnimalView from "./Components/AnimalView";
import Quiz from "./Components/Quiz";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapScreen />} />
          <Route path="/animallist" element={<AnimalList />} />
          <Route path="/animalview" element={<AnimalView />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
