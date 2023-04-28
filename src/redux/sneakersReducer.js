const initialState = {
  isLoading: false,
  favorites: [],
  orders: [],
};

function addToFavorite(state, item) {
  return { ...state, favorites: [...state.favorites, item] };
}

function removeFromFavorites(state, item) {
  const newFavorites = state.favorites.filter((element) => item !== element);
  return { ...state, favorites: newFavorites };
}


function addToOrders(state, item) {
  return { ...state, orders: [...state.orders, item] };
}
function removeFromOrders(state, item) {
  const newOrders = state.orders.filter((element) => item !== element);
  return { ...state, orders: newOrders };
}
export const sneakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return addToFavorite(state, action.payload);
    case "REMOVE_FROM_FAVORITES":
      return removeFromFavorites(state, action.payload);
    case "ADD_TO_ORDERS":
      return addToOrders(state, action.payload);
    case "REMOVE_FROM_ORDERS":
      return removeFromOrders(state, action.payload);
    default:
      return state;
  }
};
