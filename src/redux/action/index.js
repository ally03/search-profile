export const SET_DATA = "SET_DATA";
export const FETCH_ERROR = "FETCH_ERROR";
export const NAME_SEARCH = "NAME_SEARCH";
export const AGE_SEARCH = "AGE_SEARCH";
export const GENDER_SEARCH = "GENDER_SEARCH";
export const SET_FILTERS = "SET_FILTERS";

export const fetchUserData = () => async (dispatch) => {
  try {
    const request = await fetch("https://randomuser.me/api/?results=200");
    const response = await request.json();
    dispatch({
      type: SET_DATA,
      payload: response.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.message,
    });
  }
};

export const filterUsers = (criteria) => async (dispatch) => {
  dispatch({ type: SET_FILTERS, payload: criteria });

  try {
    const users = await getUsers();
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
      return nameMatch && ageMatch && genderMatch;
    });
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
    const request = await fetch("https://randomuser.me/api/?results=200");
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const searchAgeValue = (value) => (dispatch) => {
  dispatch({
    type: AGE_SEARCH,
    payload: value,
  });
};

export const searchGenderValue = (value) => (dispatch) => {
  dispatch({
    type: GENDER_SEARCH,
    payload: value,
  });
};
