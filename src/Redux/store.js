import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function Store(){
   let store = createStore(
     persistedReducer,
     composeWithDevTools(applyMiddleware(thunk))
   );
   let persistor = persistStore(store);
   return { store, persistor };
}