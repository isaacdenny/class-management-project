const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, ...payload };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;
