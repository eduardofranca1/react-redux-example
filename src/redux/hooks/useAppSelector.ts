import { useSelector, TypedUseSelectorHook } from "react-redux";
// useSelector = hook do react-redux
import { RootState } from "../store";

// criar um useSelector personalizado para o type da store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
