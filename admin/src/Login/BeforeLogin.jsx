import React, { useRef, useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Link } from "react-router-dom";
import axios from '../api/axios';
import AuthContext from '../Context/AuthProvider';

const LOGIN_URL = '/auth';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringifly({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
        );
        console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken});
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else { 
          setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in!</h1>
          <br></br>
          <p>
            <Link to="/">Go to Home</Link>
          </p>
        </div>
      ) : (
        <section className="page-wrapper">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Form onSubmit={handleSubmit}>
            <FormLabel className="fs-1 mx-5 my-3">Login</FormLabel>
            <FormGroup>
              <FormLabel className="fs-4 mx-5">ID</FormLabel>
              <Form.Control
                className="w-25 mx-5"
                type="text"
                id="username"
                placeholder="ID"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel className="fs-4 mx-5">Password</FormLabel>
              <Form.Control
                className="w-25 mx-5"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </FormGroup>

            <Button
              variant="dark"
              className="btn btn-rimary btn-block mx-5 my-3"
            >
              Login
            </Button>
            <p className="mx-5">Need an Account?</p>
            <Link to="/Register">
              <Button
                variant="dark"
                className="btn btn-rimary btn-block mx-5 my-0"
              >
                Sign Up
              </Button>
            </Link>
          </Form>
        </section>
      )};
    </>
  );
};

export default Login;
