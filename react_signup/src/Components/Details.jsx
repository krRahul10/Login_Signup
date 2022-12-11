import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const Details = () => {
  const [logindata, setLogindata] = useState([]);
  const history = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(logindata);

  var todayDate = new Date().toISOString().slice(0, 10);

  console.log(todayDate);
  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLogindata(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });
      if (userbirth) {
        setTimeout(() => {
            handleShow()
          console.log("hello");
        }, 3000);
      }
    }
  };

  const userLogOut = ()=>{
    localStorage.removeItem("user_login")
    history("/")
  }

  useEffect(() => {
    Birthday();
  }, []);
  return (
    <div>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details Page</h1>
          <h1>{logindata[0].name}</h1>
          <Button onClick={userLogOut}>LogOut</Button>
        {
            logindata[0].date === todayDate ? 
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Wish You Many Many Happy Returns Of Day! Happy Birthday</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>:""
        }
        </>
      )}
    </div>
  );
};

export default Details;
