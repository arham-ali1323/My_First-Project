import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const GetCode = ({ switchForm }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code.");
    } else {
      setError("");
      toast.success("Code verified successfully!");
      switchForm("newPassword");
    }
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

        <h3 className="fw-bold mb-4 text-start">Verify Reset Code</h3>

        <Form onSubmit={handleVerify}>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter the 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Verify Code
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

export default GetCode;
