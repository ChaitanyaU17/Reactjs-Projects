import { configureStore } from "@reduxjs/toolkit";
import pollustionSlice from "./redux/Pollustion";

import locationSlice from "./redux/Permissions/location";
import notificationsSlice from "./redux/notificationsSlice";
export const store = configureStore({
  reducer: {
    pollustion: pollustionSlice,
    location: locationSlice,
    notifications:notificationsSlice
  },
});
