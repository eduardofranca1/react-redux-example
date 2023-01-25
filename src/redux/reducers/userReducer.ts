import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    name: "Eduardo",
    age: 24,
  },
  // reducers = onde ficará as actions
  reducers: {
    // action = ação que irá ser executada
    // payload = informação recebida para alterar o state do atributo selectionado (state.name)
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = slice.actions;
export default slice.reducer;
