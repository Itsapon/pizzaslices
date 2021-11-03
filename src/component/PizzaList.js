//tool imports
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//specific imports
import { selectUser } from "../store/user/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/actions";

//function

/*
Add an empty (♡) or filled (♥) heart symbol 
in a button next to each pizza, 
to indicate whether it's a favorite of the user or not.
1. add a button
2. think of selector -> is same
3. import selector -> is same
4. conditional formatting
*/
export default function PizzaList() {
  const user = useSelector(selectUser);
  const allPizzas = useSelector(selectAllPizzas);
  const dispatch = useDispatch();
  console.log("Pizzalist: allpizzas", allPizzas);
  console.log("Pizzalist: user:", user);

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
            <strong>{pizza.name}</strong>{" "}
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
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
