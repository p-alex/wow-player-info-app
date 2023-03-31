import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface InitialState {
  id: string;
  battleTag: string;
  accessToken: string;
}

const initialState: InitialState = {
  id: "",
  battleTag: "",
  accessToken: "",
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        battleTag: string;
        accessToken: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.battleTag = action.payload.battleTag;
      state.accessToken = action.payload.accessToken;
    },
    setNewAccessToken: (
      state,
      action: PayloadAction<{ accessToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
    resetUser: (state) => {
      state.id = "";
      state.battleTag = "";
      state.accessToken = "";
    },
  },
});

export const { setUser, setNewAccessToken, resetUser } = authSlice.actions;

export default authSlice.reducer;
