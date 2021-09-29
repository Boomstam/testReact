import './App.css';
import {CATEGORIES_DATA} from "./data/data";
import {Category} from "./components/Category";

function App() {
  return (
    <div>
      <h1>Menu</h1>
        {CATEGORIES_DATA.map(c => <Category category={c} key={c.name} />)}
    </div>
  );
}

export default App;
