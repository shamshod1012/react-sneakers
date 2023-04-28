const initialState = {
  isLoading: false,
  sneakers: [],
  favorites: [],
  orders: [],
};
console.log(initialState);

function addToFavorite(state, item) {
  return { ...state, favorites: [...state.favorites, item] };
}
export const sneakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return addToFavorite(state, action.payload);

    default:
      return state;
  }
};
