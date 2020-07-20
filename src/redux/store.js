// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducer/";
// const initialState = {};

// const middlewares = [thunk];

// export default createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middlewares)
// );

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/";

export default createStore(rootReducer, applyMiddleware(thunk));
