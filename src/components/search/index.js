import React from "react";
import { Form, Input, Select, Radio } from "antd";
import { connect } from "react-redux";
import {
  filterUsers,
  searchNameValue,
  searchAgeValue,
  searchGenderValue,
  SET_DATA,
  getUsers,
} from "../../redux/action";
import "./index.css";

const { Option } = Select;

function Search(props) {
  return (
    <div className="container">
      <h1>Refine</h1>
      <Form name="search-person">
        <Form.Item name="name" label="Name">
          <Input
            onChange={(event) =>
              props.searchNameValue({
                name: event.target.value,
                age: props.age,
                gender: props.gender,
              })
            }
          />
        </Form.Item>
        <Form.Item name="name" label="Age">
          <Input.Group compact>
            <Select
              placeholder={"choose age"}
              onChange={(value) =>
                props.searchAgeValue({
                  name: props.name,
                  age: value,
                  gender: props.gender,
                })
              }
            >
              <Option value={[0, 10]}>0 - 10</Option>
              <Option value={[10, 20]}>10 - 20</Option>
              <Option value={[20, 30]}>20 - 30</Option>
              <Option value={[30, 40]}>30 - 40</Option>
              <Option value={[40, 50]}>40 -50</Option>
            </Select>
          </Input.Group>
        </Form.Item>
        <Radio.Group
          onChange={(event) => {
            console.log("props", props);
            props.searchGenderValue({
              name: props.name,
              age: props.age,
              gender: event.target.value,
            });
          }}
        >
          <Radio className="radioStyle" value="male">
            Male
          </Radio>
          <Radio className="radioStyle" value="female">
            Female
          </Radio>
        </Radio.Group>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.productReducer.userData,
    error: state.productReducer.error,
    name: state.productReducer.name,
    age: state.productReducer.age,
    gender: state.productReducer.gender,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchNameValue: (criteria) => {
      console.log("searchNameValue criteria", criteria);
      // dispatch(searchNameValue(value));
      dispatch(filterUsers(criteria));
    },
    searchAgeValue: (criteria) => {
      console.log("searchAgeValue criteria", criteria);
      dispatch(filterUsers(criteria));
    },
    searchGenderValue: (criteria) => {
      console.log("searchGenderValue criteria", criteria);
      dispatch(filterUsers(criteria));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
