import { compose } from "redux";

export const SET_DATA = "SET_DATA";
export const FETCH_ERROR = "FETCH_ERROR";
export const NAME_SEARCH = "NAME_SEARCH";
export const AGE_SEARCH = "AGE_SEARCH";
export const GENDER_SEARCH = "GENDER_SEARCH";
export const SET_FILTERS = "SET_FILTERS";

export const fetchUserData = (value) => async (dispatch) => {
  try {
    const request = await fetch(
      "https://run.mocky.io/v3/70807a6d-9c17-4775-b05d-d1356eab733b"
    );
    const response = await request.json();
    console.log("response data hafiz", response);
    dispatch({
      type: SET_DATA,
      payload: response.results,
    });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: FETCH_ERROR,
      payload: error.message,
    });
  }
};

export const filterUsers = (criteria) => async (dispatch) => {
  console.log("criteria", criteria);
  // console.log("age", criteria.age[0], criteria.age[1]);
  dispatch({ type: SET_FILTERS, payload: criteria });

  try {
    const users = await getUsers();
    console.log("users", users);

    const filteredUsers = users.results.filter((user) => {
      const nameMatch = criteria.name
        ? user.name.first.toLowerCase().includes(criteria.name.toLowerCase()) ||
          user.name.last.toLowerCase().includes(criteria.name.toLowerCase())
        : true;

      const ageMatch = criteria.age
        ? user.dob.age >= criteria.age[0] && user.dob.age <= criteria.age[1]
        : true;

      const genderMatch = criteria.gender
        ? user.gender === criteria.gender
        : true;
      console.log(
        "nameMatch && ageMatch && genderMatch",
        nameMatch,
        ageMatch,
        genderMatch
      );
      return nameMatch && ageMatch && genderMatch;
    });
    console.log("filteredUsers", filteredUsers);
    dispatch({
      type: SET_DATA,
      payload: filteredUsers,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const request = await fetch(
      "https://run.mocky.io/v3/70807a6d-9c17-4775-b05d-d1356eab733b"
    );
    const response = await request.json();
    console.log("response data from get User", response);
    return response;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
};

export const searchNameValue = (value) => (dispatch) => {
  // console.log("get user in search name value", getUsers());
  // // console.log("name value", value);
  // try {
  //   const users = await getUsers();
  //   dispatch({
  //     type: NAME_SEARCH,
  //     payload: error.message,
  //   });
  // } catch (error) {
  // }
  // dispatch({
  //   type: NAME_SEARCH,
  //   payload: value,
  // });
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
