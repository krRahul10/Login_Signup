import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useState } from "react";
const Login = () => {
  return (
    <div>
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            {/* <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getData}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  onChange={getData}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                style={{
                  marginLeft: "-50%",
                  backgroundColor: "rgb(67,185,127)",
                }}
                onClick={addData}
              >
                Submit
              </Button>
            </Form> */}
            <p
              className="mt-3"
              style={{
                marginLeft: "-50%",
              }}
            >
              Already Have an Account <span>SignIn</span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Login;
