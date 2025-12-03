import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import { toast } from "react-toastify";

const SignInForm = ({ switchForm }) => {
  const navigate = useNavigate(); // For redirect
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password");
      return;
    }

    // Success feedback
    toast.success("Login successful!");

    // Redirect to homepage
    navigate("/");
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
          onClick={() => switchForm(null)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
            color: "#888",
          }}
          size={18}
        />

        <h3 className="fw-bold mb-4 text-start">Sign In</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Sign In
          </Button>

          <div className="mt-3 text-center">
            <p className="mb-1">
              Don’t have an account?{" "}
              <span
                onClick={() => switchForm("signup")}
                style={{ color: "#007bff", cursor: "pointer" }}
              >
                Sign up
              </span>
            </p>
            <p className="mb-3">
              <span
                onClick={() => switchForm("forgotPassword")}
                style={{ color: "#007bff", cursor: "pointer" }}
              >
                Forgot Password?
              </span>
            </p>
          </div>

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
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm "
                  style={{ border: "none", color: "#1DA1F2" }}
                >
                  <FaTwitter />
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
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  style={{ border: "none", color: "#C13584" }}
                >
                  <FaInstagram />
                  <span style={{ fontSize: "12px" }}>Instagram</span>
                </Button>
              </a>
            </Col>

            <Col xs={6}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="light"
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  style={{ border: "none", color: "#DB4437" }}
                >
                  <FaGoogle />
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
                  className="w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  style={{ border: "none", color: "#333" }}
                >
                  <FaGithub />
                  <span style={{ fontSize: "12px" }}>Github</span>
                </Button>
              </a>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default SignInForm;
