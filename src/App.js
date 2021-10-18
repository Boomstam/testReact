import './App.css';
import {CATEGORIES_DATA} from "./data/data";
import {MenuNavbar} from "./components/MenuNavbar";
import {MenuCard} from "./components/MenuCard";
import "./services/firestore";

function App() {
  return (
    <div>
        <MenuNavbar />
        <MenuCard menuData={CATEGORIES_DATA}/>
    </div>
  );
}

export default App;
