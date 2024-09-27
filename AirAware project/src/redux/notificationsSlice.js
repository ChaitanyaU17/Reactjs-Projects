// redux/notificationsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("notifications");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Could not load state", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("notifications", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: loadFromLocalStorage(),
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    clearNotifications: (state) => {
      const newState = [];
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addNotification, clearNotifications } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
