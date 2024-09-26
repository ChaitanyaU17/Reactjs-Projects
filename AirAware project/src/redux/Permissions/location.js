import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: JSON.parse(localStorage.getItem("location")) || {
    lat: null,
    lng: null,
  },
};

const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      localStorage.setItem("location", JSON.stringify(action.payload));
    },
  },
});

export const { setLocation } = LocationSlice.actions;
export default LocationSlice.reducer;
