import React from "react";
import { Form, Input, Select, Radio } from "antd";
import { connect } from "react-redux";
import {
  searchNameValue,
  searchAgeValue,
  searchGenderValue,
} from "../../redux/action";
import "./index.css";

const { Option } = Select;

function Search(props) {
  const handleInput = (value) => {
    props.searchNameValue(value);
  };

  const handleSelect = (value) => {
    props.searchAgeValue(value);
  };
  return (
    <div className="container">
      <h1>Refine</h1>
      <Form name="search-person">
        <Form.Item name="name" label="Name">
          <Input onChange={(event) => handleInput(event.target.value)} />
        </Form.Item>
        <Form.Item name="name" label="Age">
          <Input.Group compact>
            <Select
              placeholder={"choose age"}
              onChange={(value) => handleSelect(value)}
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
          onChange={(event) => props.searchGenderValue(event.target.value)}
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

const MapDispatchToProps = (dispatch) => {
  return {
    searchNameValue: (value) => {
      dispatch(searchNameValue(value));
    },
    searchAgeValue: (value) => {
      dispatch(searchAgeValue(value));
    },
    searchGenderValue: (value) => {
      dispatch(searchGenderValue(value));
    },
  };
};

export default connect(null, MapDispatchToProps)(Search);
