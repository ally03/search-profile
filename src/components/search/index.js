import React, { useState, useEffect } from "react";
import { Form, Input, Select, Radio, Button } from "antd";
import "./index.css";
import { connect } from "react-redux";
// import { connect } from "react-redux";
// import { fetchProducts, fetchProductsSuccess } from "../../redux/action";

const { Option } = Select;

function Search(props) {
  return (
    <div className="container">
      <h1>Refine</h1>
      <Button onClick={() => props.fetchUserSetData()}>alid</Button>
      <Form name="search-person">
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Age">
          <Input.Group compact>
            <Select defaultValue="Option1-1">
              <Option value="Option1-1">Option1-1</Option>
              <Option value="Option1-2">Option1-2</Option>
            </Select>
          </Input.Group>
        </Form.Item>
        <Radio.Group>
          <Radio className="radioStyle">Male</Radio>
          <Radio className="radioStyle">Female</Radio>
        </Radio.Group>
      </Form>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return state;
// };

// {
// products: state.productReducer.items,
// loading: state.products.loading,
// error: state.products.error,
// products: state.testReducer.products,
// cart: state.testReducer.cart,
// currency: state.testReducer.currency,
// currencyData: state.testReducer.currencyData,
// totalPrice: state.testReducer.totalPrice,
// }
// export default connect(mapStateToProps)(Search);

export default Search;
