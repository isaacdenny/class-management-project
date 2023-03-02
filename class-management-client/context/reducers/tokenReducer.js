const tokenReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...payload };
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default tokenReducer;
