import { configureStore } from "@reduxjs/toolkit";

const SideBarReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return action.given;
    default:
      return state;
  }
};

export default configureStore({
  reducer: {
    sidebar_reducer: SideBarReducer,
  },
});
