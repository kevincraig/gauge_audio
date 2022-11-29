import { RootState } from "../app/rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";

export default function useRedux() {
  const dispatch = useDispatch<AppDispatch>();
  const appSelector: TypedUseSelectorHook<RootState> = useSelector;
  return { dispatch, appSelector };
}
