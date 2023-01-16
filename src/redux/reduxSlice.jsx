import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Initial State
const initialState = {
  loading: false,
  data: [],
  error: "",
};
// Fetch Image
export const fetchImage = createAsyncThunk("data/fetchImage", async () => {
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=11&per_page=30",
    {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f91700001000001200d802b64884346bb4c4d9a88a8542d",
        "Content-Type": "multipart/mixed",
      },
    }
  );
  const data = response.json();
  return data;
});
// Slice
const reduxSlice = createSlice({
  name: "image",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.loading = false;
      for (let i = 0; i < action.payload.photos.length; i++) {
        let obj = {
          id: action.payload.photos[i].id,
          data: action.payload.photos[i].src.original,
          like: false,
          comment: "",
        };
        state.data.push(obj);
      }
      state.data = [...state.data];
      localStorage.setItem("image", JSON.stringify(state.data));
      state.error = "";
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default reduxSlice.reducer;
