import "./App.css";
import AddPizzaForm from "./component/AddPizzaForm";
import PizzaList from "./component/PizzaList";

function App() {
  return (
    <div className="App">
      <div>
        <PizzaList />
      </div>
      <div>
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
