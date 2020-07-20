export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return fetch("https://randomuser.me/api/?results=200")
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProductsSuccess(data.results));
        console.log("data", data.results);
        return data.results;
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

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
