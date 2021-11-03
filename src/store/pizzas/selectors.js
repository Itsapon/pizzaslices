export const selectAllPizzas = (reduxState) => {
  const copy = [...reduxState.pizzas.allPizzas];
  console.log("Pizzaselector all what is copy?", copy);
  return copy.sort((a, b) => {
    return b.bought - a.bought;
  });
};

/*To do :done!
reduxState.pizzas.allPizzas;
todo: modify selector to sort pizzas by popularity. 
1. copy the state into a new array
2. use the sort function to return the now sorted copy.
*/
