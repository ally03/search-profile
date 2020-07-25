import {
  FETCH_DATA,
  FETCH_ERROR,
  NAME_SEARCH,
  AGE_SEARCH,
  GENDER_SEARCH,
} from "../action";
const initialState = {
  userData: [],
  error: "",
  nameSearch: undefined,
  ageSearch: 0,
  genderSearch: undefined,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case AGE_SEARCH:
      return {
        ...state,
        ageSearch: action.payload,
      };
    case GENDER_SEARCH:
      return {
        ...state,
        genderSearch: action.payload,
      };
    case NAME_SEARCH:
      return {
        ...state,
        nameSearch: action.payload,
        // nameSearch: state.userData.filter(
        //   (person) =>
        //     person.name.first.toLowerCase().includes(action.payload) ||
        //     person.name.last.toLowerCase().includes(action.payload)
        // ),
      };
    default:
      return state;
  }
};

export default productReducer;
