import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for making an API call
export const fetchweatherData = createAsyncThunk(
  "weather/fetchweatherData",
  async ({ q, lat, lon }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?${
        q ? `q=${q}` : `lat=${lat}&lon=${lon}`
      }&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en`
    );
    console.log(response.data);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchweatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchweatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchweatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
