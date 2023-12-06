// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type User = {
//   uid: string | null;
//   email: string  | null;
//   displayName: string | null;
//   photoURL: string | null;
// };

type UserState = {
  photoURL: string | undefined;
  user: { [key: string]: any } | null;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  error: null,
  photoURL: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ [key: string]: any } | null>) => {
      state.user = action.payload;
      state.error = null; 
    },
    removeUser: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
