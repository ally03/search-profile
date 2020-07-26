import {
  SET_DATA,
  FETCH_ERROR,
  NAME_SEARCH,
  AGE_SEARCH,
  GENDER_SEARCH,
  SET_FILTERS,
} from "../action";
const initialState = {
  userData: [],
  error: "",
  name: undefined,
  age: undefined,
  gender: undefined,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
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
        userData: state.userData.filter((user) => {
          return user.name.first
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    case SET_FILTERS:
      const { name, age, gender } = action.payload;
      return {
        ...state,
        name,
        age,
        gender,
      };
    default:
      return state;
  }
};

export default productReducer;
