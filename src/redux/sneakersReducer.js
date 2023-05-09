const initialState = {
  isLoading: false,
  allSneakers: [],
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
function saveAllSneakers(state, array = []) {
  return { ...state, allSneakers: array };
}
function saveFavorites(state, array = []) {
  return { ...state, favorites: array };
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
    case "SAVE_ALL_SNEAKERS":
      return saveAllSneakers(state, action.payload);
    case "SAVE_FAVORITES_S":
      return saveFavorites(state, action.payload);
    default:
      return state;
  }
};
