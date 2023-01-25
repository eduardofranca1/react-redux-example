import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  // configurando reducer
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

// type = é uma type que é a junção de todos os types de todos os reducers que eu tenho
// ele junta todos os types, e joga em apenas 1 type
// por que isso? porque vai ser necessário pegar as informações do reducer
export type RootState = ReturnType<typeof store.getState>;
