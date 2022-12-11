import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
    const history = useNavigate()
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  //   console.log(inputVal);

  const getData = (e) => {
    const { value, name } = e.target;
    setInputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log("getuserArr", getuserArr);
    const { email, password } = inputVal;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password must be greater than 5");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {

          alert("user login successfully");
          localStorage.setItem("user_login", (getuserArr))
          history('/details')
        }
      }
    }
  };
  return (
    <div>
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
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
            </Form>
            <p
              className="mt-3"
              style={{
                marginLeft: "-50%",
              }}
            >
              Doesn't Have an Account ?...
              <span>
                <NavLink to="/">Register Now</NavLink>{" "}
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Login;
