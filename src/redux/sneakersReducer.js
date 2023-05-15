const initialState = {
  allSneakers: [],
  showingSneakers: [],
  isOverlayHide: true,
  totalPrice: 0,
};

function saveAllSneakers(state, array = []) {
  return { ...state, allSneakers: array };
}

export const sneakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ALL_SNEAKERS":
      return saveAllSneakers(state, action.payload);
    case "SAVE_SHOWING_SNEAKERS":
      return {
        ...state,
        showingSneakers: action.payload,
      };

    case "OPEN_OVERLAY":
      return { ...state, isOverlayHide: false };
    case "CLOSE_OVERLAY":
      return { ...state, isOverlayHide: true };
    case "GETTOTALPRICE":
      return { ...state, totalPrice: action.payload };
    default:
      return state;
  }
};
