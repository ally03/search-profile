import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { connect } from "react-redux";
import { fetchUserData } from "../../redux/action";
import "./index.css";
// import { UserData } from "../utils/api";
const { Meta } = Card;
const personData = require("../../redux/action/apis.json");
console.log("personData", personData);

function ProfileCard(props) {
  // const [isLoaded, setIsLoaded] = useState(false);

  // const { fetchUserData } = props;
  // useEffect(() => {
  //   setIsLoaded(true);
  //   fetchUserData();
  // }, [fetchUserData]);

  // console.log("object", props.nameSearch, props.nameSearch.length);
  //console.log("search value", props);
  // var alid = props.userData.filter((person) =>
  // if (person.name.)
  // person.name.first.toLowerCase().includes(props.nameSearch)
  // );

  const data = personData.results.filter((user) => {
    const firstName = user.name.first.toLowerCase();
    const lastName = user.name.last.toLowerCase();

    if (
      (firstName.includes(props.nameSearch) ||
        lastName.includes(props.nameSearch)) &&
      user.dob.age >= props.ageSearch[0] &&
      user.dob.age <= props.ageSearch[1] &&
      user.gender === props.genderSearch
    ) {
      return true;
    } else if (
      (firstName.includes(props.nameSearch) ||
        lastName.includes(props.nameSearch)) &&
      user.dob.age >= props.ageSearch[0] &&
      user.dob.age <= props.ageSearch[1]
    ) {
      return true;
    } else if (
      user.dob.age >= props.ageSearch[0] &&
      user.dob.age <= props.ageSearch[1] &&
      user.gender === props.genderSearch
    ) {
      return true;
    } else if (
      (firstName.includes(props.nameSearch) ||
        lastName.includes(props.nameSearch)) &&
      user.gender === props.genderSearch
    ) {
      return true;
    } else {
      return false;
    }
    // return (
    //   firstName.includes(props.nameSearch) ||
    //   lastName.includes(props.nameSearch) ||
    //   (user.dob.age >= props.ageSearch[0] &&
    //     user.dob.age <= props.ageSearch[1]) ||
    //   user.gender === props.genderSearch
    // );
  });

  console.log("api filter data", data);
  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (
    <div className="profile-container">
      {/* <h1>{props.error}</h1>
        <h1> {props.userData.length} Result</h1> */}
      <List
        rowKey="uid"
        grid={{ xs: 1, md: 1, xl: 2 }}
        // dataSource={props.userData}
        dataSource={personData.results}
        pagination={{
          size: "small",
          onChange: (page) => {
            console.log(page);
          },
          showSizeChanger: false,
          className: "pagination",
          pageSize: 20,
        }}
        renderItem={(item, key) => {
          return (
            <List.Item>
              <Card
                className="profile-image"
                bordered={false}
                cover={
                  <img
                    style={{ width: "400px", height: "200px" }}
                    alt="example"
                    src={item.picture.large}
                  />
                }
              >
                <Meta
                  title={[item.name.first, " ", item.name.last]}
                  description={[
                    <div>
                      <p>Age: {item.dob.age}</p>
                      <p>Gender: {item.gender}</p>
                      <p> Email: {item.email}</p>
                    </div>,
                  ]}
                />
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
}
//}
const MapStateToProps = (state) => {
  return {
    userData: state.productReducer.userData,
    error: state.productReducer.error,
    nameSearch: state.productReducer.nameSearch,
    ageSearch: state.productReducer.ageSearch,
    genderSearch: state.productReducer.genderSearch,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ProfileCard);
