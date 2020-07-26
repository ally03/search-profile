import React from "react";
import { Input, Select, Radio } from "antd";
import { connect } from "react-redux";
import { filterUsers } from "../../redux/action";
import "./index.css";

const { Option } = Select;

function Search(props) {
  return (
    <div className="container">
      <h2>Refine</h2>
      <div name="search-person">
        <div className="search-field">
          <h3>Name</h3>
          <Input
            onChange={(event) =>
              props.searchNameValue({
                name: event.target.value,
                age: props.age,
                gender: props.gender,
              })
            }
          />
        </div>

        <div className="search-field">
          <h3>Age</h3>

          <Select
            style={{ width: 150 }}
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
        </div>

        <div className="search-field">
          <h3>Gender</h3>
          <Radio.Group
            onChange={(event) => {
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
        </div>
      </div>
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
      dispatch(filterUsers(criteria));
    },
    searchAgeValue: (criteria) => {
      dispatch(filterUsers(criteria));
    },
    searchGenderValue: (criteria) => {
      dispatch(filterUsers(criteria));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
