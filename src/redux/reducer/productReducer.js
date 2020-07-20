import { UPDATE_STATE, FETCH_DATA, FETCH_ERROR } from "../action";
const initialState = {
  products: "",
  userData: [],
  error: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const initialState = {
//   UserData: {},
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USERDATA":
//       return {
//         ...state,
//         UserData: action.payload,
//       };
//     default:
//       return state;
//   }
// };
