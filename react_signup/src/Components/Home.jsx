import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";

const Home = () => {
  return (
    <div>
      Home
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                style={{
                  marginLeft: "-50%",
                  backgroundColor: "rgb(67,185,127)",
                }}
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
              Already Have an Account <span>SignIn</span>
            </p>
          </div>
          <Sign_img/>
        </section>
      </div>
    </div>
  );
};

export default Home;
