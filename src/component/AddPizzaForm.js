import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/actions";
/* TO DO: when user submits form, pizza is added to store.
1. define a new action creator called addPizza 
with name and description as parameters. Define id using
Math.random().
1.2 should create an action with type pizzas/add
2. from pizzaform, dispatch action
2.1 import usedispatch, addpizza
2.2 onclick of submit button, dispatch action
2.3 check with console log and also dev tools if action is dispatched
3. empty input fields afterwards
4. add case to reducer, remember to NOT modify OG state

*/

export default function AddPizzaForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    const data = { name, description };
    console.log("new pizza:", name, description);
    dispatch(addPizza(data));
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
