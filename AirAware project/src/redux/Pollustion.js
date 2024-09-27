// src/features/example/exampleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for making an API call
export const fetchpollustionData = createAsyncThunk(
  "pollustion/fetchpollustionData",
  async ({lat,lon}) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return response.data;
  }
);

const pollustionSlice = createSlice({
  name: "pollustion",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
 
});

export default pollustionSlice.reducer;
