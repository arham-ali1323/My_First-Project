import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const ResetPassword = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    toast.success("Reset link sent successfully!");
    switchForm("getCode");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
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

        <h3 className="fw-bold mb-4 text-start">Reset Your Password</h3>

        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Send Reset Link
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Already have a reset code?{" "}
          <span
            onClick={() => switchForm("getCode")}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Enter Code
          </span>
        </p>
      </div>
    </Container>
  );
};

export default ResetPassword;
