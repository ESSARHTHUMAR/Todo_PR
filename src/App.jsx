import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
// import DateFilter from "./components/FilterByDate";
import FilterByDate from "./components/FilterByDate";

function App() {
  return (
    <div className="mt-20">
      <AddTodo />
      <FilterByDate />
      <Todos />
    </div>
  );
}

export default App;
