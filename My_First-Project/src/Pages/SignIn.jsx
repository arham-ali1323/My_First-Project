import React, { useState } from "react";
import SignupForm from "../Features/SignInComponent/SignupForm";
import SignInForm from "../Features/SignInComponent/SignInForm";
import ResetPassword from "../Features/SignInComponent/ResetPassword";
import GetCode from "../Features/SignInComponent/GetCode";
import NewPassword from "../Features/SignInComponent/Newpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [currentForm, setCurrentForm] = useState("signIn");

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  const renderForm = () => {
    switch (currentForm) {
      case "signIn":
        return <SignInForm switchForm={handleFormSwitch} />;
      case "signup":
        return <SignupForm switchForm={handleFormSwitch} />;
      case "forgotPassword":
        return <ResetPassword switchForm={handleFormSwitch} />;
      case "getCode":
        return <GetCode switchForm={handleFormSwitch} />;
      case "newPassword":
        return <NewPassword switchForm={handleFormSwitch} />;
      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      {renderForm()}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;
