import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import {
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !repeatPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    toast.success("Account created successfully!"); // ✅ Success Toast
    switchForm("signIn");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light my-5"
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <FaTimes
          onClick={() => switchForm("signIn")}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
            color: "#888",
          }}
          size={18}
        />

        <h3 className="fw-bold mb-4 text-start">Start free trial</h3>

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Create Account
          </Button>

          <p className="mt-3">
            Already have an account?{" "}
            <span
              onClick={() => switchForm("signIn")}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              Log in
            </span>
          </p>

          <div className="d-flex align-items-center my-3">
            <div className="flex-grow-1 border-top"></div>
            <span className="px-2 text-muted">or Sign in with</span>
            <div className="flex-grow-1 border-top"></div>
          </div>

          <Row className="g-2">
            <Col xs={6}>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="light"
                  style={{ border: "none", color: "#1DA1F2" }}
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  <FaTwitter color="#1DA1F2" />
                  <span style={{ fontSize: "12px" }}>Twitter</span>
                </Button>
              </a>
            </Col>

            <Col xs={6}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="light"
                  style={{ border: "none", color: "#C13584" }}
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  <FaInstagram color="#C13584" />
                  <span style={{ fontSize: "11px" }}>Instagram</span>
                </Button>
              </a>
            </Col>

            <Col xs={6}>
              <a
                href="https://accounts.google.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="light"
                  style={{ border: "none", color: "#DB4437" }}
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  <FaGoogle color="#DB4437" />
                  <span style={{ fontSize: "12px" }}>Google</span>
                </Button>
              </a>
            </Col>

            <Col xs={6}>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="light"
                  style={{ border: "none", color: "#333" }}
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  <FaGithub color="#333" />
                  <span style={{ fontSize: "12px" }}>Github</span>
                </Button>
              </a>
            </Col>
          </Row>
        </Form>

        {/* ✅ Toast Container to display notifications */}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </Container>
  );
};

export default SignupForm;
