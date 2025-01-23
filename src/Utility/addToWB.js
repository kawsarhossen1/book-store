const getWishList = () => {
  const storedWishStr = localStorage.getItem("wish-list");
  if (storedWishStr) {
    storedList = JSON.parse(storedWishStr);
    return storedList;
  } else {
    return [];
  }
};

const addWishList = (id) => {
  const storedList = getWishList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the wish list");
  } else {
    storedList.push(id);
    const storedWishStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedWishStr);
  }
};

export {addWishList};