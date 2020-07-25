export const FETCH_DATA = "FETCH_DATA";
export const FETCH_ERROR = "FETCH_ERROR";
export const NAME_SEARCH = "NAME_SEARCH";
export const AGE_SEARCH = "AGE_SEARCH";
export const GENDER_SEARCH = "GENDER_SEARCH";

export const fetchUserData = (value) => async (dispatch) => {
  try {
    const request = await fetch("https://randomuser.me/api/?results=20");
    const response = await request.json();
    console.log("response data hafiz", response);
    dispatch({
      type: FETCH_DATA,
      payload: response.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message,
    });
  }
};

export const searchNameValue = (value) => (dispatch) => {
  // console.log("name value", value);
  dispatch({
    type: NAME_SEARCH,
    payload: value,
  });
};

export const searchAgeValue = (value) => (dispatch) => {
  // console.log("age value", value);
  dispatch({
    type: AGE_SEARCH,
    payload: value,
  });
};

export const searchGenderValue = (value) => (dispatch) => {
  // console.log("gender value", value);
  dispatch({
    type: GENDER_SEARCH,
    payload: value,
  });
};
