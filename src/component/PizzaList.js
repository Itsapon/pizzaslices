//imports
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";
//function

/*
To do: done.
*/
export default function PizzaList() {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectAllPizzas);
  console.log("what is allpizzas", allPizzas);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Hi and welcome dear <strong>{user.name}</strong>
      </p>
      <p>We have a total of {allPizzas.length} pizzas:</p>
      <ul>
        {allPizzas.map((pizza) => (
          <li key={pizza.id}>
            <strong>{pizza.name}</strong>
            <br />
            {pizza.description}
            <br />
            <strong>Bought</strong> {pizza.bought} times
          </li>
        ))}
      </ul>
    </div>
  );
}
