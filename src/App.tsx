import React from "react";
import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  // é recomendado user apenas 1 reducer para cada informação
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(Number(e.target.value)));
  };

  const switchTeheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  const handleSwitchTheme = () => {
    switchTeheme(theme.status === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme.status === "light" ? "#FFF" : "#000",
        color: theme.status === "light" ? "#000" : "#FFF",
      }}
    >
      My name is: {user.name} and I'm {user.age} years old <br />
      Theme: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
