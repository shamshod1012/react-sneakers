export const fetchItems = (url, actionName) => async (dispatch) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: actionName, payload: data });
  } catch (error) {
    console.error("error in fetch items *_*", error);
  }
};

export const changeFavorites = (url, item) => async () => {
  const res = await fetch(`${url}/${item.id}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...item,
      isFavorite: true,
    }),
  });
  const data = await res.json();
};
export const changeFavorites2 = (url, item) => async () => {
  const res = await fetch(`${url}/${item.id}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...item,
      isFavorite: false,
    }),
  });
  const data = await res.json();
};

export const changeOrder = (url, item) => async () => {
  const res = await fetch(`${url}/${item.id}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...item,
      isOrdered: true,
    }),
  });
};
export const changeOrder2 = (url, item) => async () => {
  const res = await fetch(`${url}/${item.id}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...item,
      isOrdered: false,
    }),
  });
};
