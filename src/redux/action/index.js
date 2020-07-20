export const UPDATE_STATE = "UPDATE_STATE";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_ERROR = "FETCH_ERROR";

export const updateState = () => (dispatch) => {
  dispatch({
    type: UPDATE_STATE,
    payload: "THE BREAKFAST CLUB",
  });
};

export const fetchUserData = () => async (dispatch) => {
  try {
    const request = await fetch("https://randomuser.me/api/?results=200");
    const response = await request.json();
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

// export const fetchUserSetData = (UserData)  => {
//   fetch("https://randomuser.me/api/?results=200")
//     .then((res) => res.json())
//     .then(
//       (data) => {
//         console.log("object", data);
//         dispatch({
//           type: "FETCH_USERDATA",
//           payload: data,
//         });
//       },
//       (error) => {
//         console.log("UserData -> error", error);
//       }
//     );
// };

// export function fetchProducts() {
//   return (dispatch) => {
//     dispatch(fetchProductsBegin());
//     return fetch("https://randomuser.me/api/?results=200")
//       .then(handleErrors)
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(fetchProductsSuccess(data.results));
//         console.log("data", data.results);
//         return data.results;
//       })
//       .catch((error) => dispatch(fetchProductsFailure(error)));
//   };
// }

// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

// export const fetchProductsBegin = () => ({
//   type: FETCH_PRODUCTS_BEGIN,
// });

// export const fetchProductsSuccess = (products) => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   payload: products,
// });

// export const fetchProductsFailure = (error) => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: error,
// });
// export const fetchUserSetData = (UserData) => (dispatch) => {
//   fetch("https://randomuser.me/api/?results=200")
//     .then((res) => res.json())
//     .then(
//       (data) => {
//         console.log("object", data);
//         dispatch({
//           type: "FETCH_USERDATA",
//           payload: data,
//         });
//       },
//       (error) => {
//         console.log("UserData -> error", error);
//       }
//     );
// };

// export const fetchUserSetData = (UserData) => (dispatch) => {
//   console.log("fetchUserSetData");
//   //   dispatch({
//   //     type: "FETCH_USERDATA",
//   //     payload: "UserData",
//   //   });
// };
