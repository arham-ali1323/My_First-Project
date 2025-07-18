import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const NewPassword = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    toast.success("Password has been reset successfully!");
    switchForm("signIn");
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

        <h3 className="fw-bold mb-4 text-start">Set a New Password</h3>

        <Form onSubmit={handleSubmit}>
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
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Set New Password
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Back to{" "}
          <span
            onClick={() => switchForm("signIn")}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Sign In
          </span>
        </p>
      </div>
    </Container>
  );
};

export default NewPassword;
