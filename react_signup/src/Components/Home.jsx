import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, email, date, password } = inputVal;

    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password must be greater than 5");
    } else {
      console.log("data added successfully");
      alert("done");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inputVal]));
    }
  };
  return (
    <div>
      Home
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  onChange={getData}
                  name="name"
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getData}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="date"
                  onChange={getData}
                  name="date"
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
                  border:"1px solid white"
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
              Already Have an Account ?...<span><NavLink to='/login'>Sign In</NavLink> </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Home;
