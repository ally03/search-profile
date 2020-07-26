import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { connect } from "react-redux";
import { fetchUserData } from "../../redux/action";
import "./index.css";
// import { UserData } from "../utils/api";
const { Meta } = Card;
const personData = require("../../redux/action/apis.json");
// console.log("personData", personData);

function ProfileCard(props) {
  console.log("props", props);

  useEffect(() => {
    console.log("executing useeffect");
    props.fetchUserData();
  }, []);
  return (
    <div className="profile-container">
      {/* <h1>{props.error}</h1>
        <h1> {props.userData.length} Result</h1> */}
      <List
        rowKey="uid"
        grid={{ xs: 1, md: 1, xl: 2 }}
        // dataSource={props.userData}
        dataSource={props.userData}
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
    name: state.productReducer.name,
    age: state.productReducer.age,
    gender: state.productReducer.gender,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ProfileCard);
