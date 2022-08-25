import { useSelector } from "react-redux";
import Contacts from "./components/Contacts/Contacts";
import List from "./components/List/List";
import { contactSelectors } from "./redux/contactSlice";
import { Routes, Route } from "react-router-dom";
import AllComponents from "./components/AllComponents";
import Edit from "./components/Edit/Edit";
function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route exact path="/" element={<AllComponents />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
