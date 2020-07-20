import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import { connect } from "react-redux";
import { updateState, fetchUserData } from "../../redux/action";
import "./index.css";
// import { UserData } from "../utils/api";
const { Meta } = Card;

function ProfileCard(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    props.fetchUserData();
  }, []);

  console.log("object", props);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="profile-container">
        <h1>{props.error}</h1>
        <h1> {props.userData.length} Result</h1>
        <List
          rowKey="uid"
          grid={{ xs: 1, md: 1, xl: 2 }}
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
}
const MapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    userData: state.productReducer.userData,
    error: state.productReducer.error,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateState: () => dispatch(updateState()),
    fetchUserData: () => dispatch(fetchUserData()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ProfileCard);
