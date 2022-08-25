import { Routes, Route } from "react-router-dom";
import AllComponents from "./components/AllComponents";
import Edit from "./components/Edit/Edit";
import Error from "./components/Error/Error";
function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route exact path="/" element={<AllComponents />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
