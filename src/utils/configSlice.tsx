import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Config = {
  lang: string;
};

const initialState: Config = {
  lang: "en",
};
const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
