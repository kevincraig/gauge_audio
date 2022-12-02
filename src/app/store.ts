import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  configureStore,
  ThunkAction,
  Action,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
  ListenerEffectAPI,
  addListener,
} from "@reduxjs/toolkit";

import playerSlice from "../features/player/playerSlice";
import albumSlice from "../features/spotify/albums/albumSlice";

const listenerMiddleware = createListenerMiddleware({
  onError: (error, api) => {
    console.log("Error in listener", error);
  },
});

export const store = configureStore({
  reducer: {
    player: playerSlice,
    album: albumSlice,
  },
  middleware: (gDM) => gDM().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as AppAddListener;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
