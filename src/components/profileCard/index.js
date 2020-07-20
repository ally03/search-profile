import React, { useEffect, useState } from "react";
import { Layout, Card, Col, Row, List } from "antd";
import "./index.css";
import { UserData } from "../utils/api";
const { Meta } = Card;

function ProfileCard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(UserData)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="profile-container">
        <h1> {items.length} Result</h1>
        <List
          grid={{ xs: 1, md: 1, xl: 2 }}
          dataSource={items}
          pagination={{
            size: "small",
            onChange: (page) => {
              console.log(page);
            },
            showSizeChanger: false,
            className: "pagination",
            pageSize: 20,
          }}
          renderItem={(item, index) => {
            return (
              <List.Item key={String(Math.random().toString())}>
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

export default ProfileCard;
