const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const pizzaId = action.payload;
      const favorites = state.favorites.includes(pizzaId)
        ? state.favorites.filter((f) => f !== pizzaId)
        : [...state.favorites, pizzaId];
      return {
        ...state,
        favorites,
      };
    }

    default: {
      return state;
    }
  }
}
