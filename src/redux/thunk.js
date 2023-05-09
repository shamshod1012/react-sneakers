export const fetchItems = (url, actionName) => async (dispatch) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: actionName, payload: data });
  } catch (error) {
    console.error("error in fetch items *_*", error);
  }
};
export const fetchSingleItems = (url, url2, item) => async (dispatch) => {
  try {
    const res2 = await fetch(`${url}/${item.id}`);
    const data2 = await res2.json();
    console.log(data2);
    const res = await fetch(url2, {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data2),
    });
  } catch (error) {
    console.error(error);
  }
};

export const remoteItems = (url, id) => async () => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
      },
    });
  } catch (error) {
    console.error("XATOLIK", error);
  }
};

export const changeFavotie = (url, item) => async (dispatch) => {
  const res = await fetch(`${url}/${item.id}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...item, isFavorite: !item.isFavorite }),
  });
  const data = await res.json();
};
