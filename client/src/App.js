import React, { useState } from "react";
import SignIn from "./component/signIn";

const App = () => {
  const loginUser = {
    email: "seolhee@gmail.com",
    password: "seolhee",
  };

  const [email, setEmail] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (forms) => {
    console.log(forms);

    if (
      forms.email == loginUser.email &&
      forms.password == loginUser.password
    ) {
      console.log("Success");
      setEmail({
        email: forms.email,
        password: forms.password,
      });
    } else {
      console.log("your password is incorret");
      setError("your password is incorret");
    }
  };

  const Logout = () => {
    setEmail({ email: "", password: "" });
  };

  return (
    <div className="App">
      {email.password != "" ? (
        <div className="hi">
          <h1>
            Hi, <span>{email.email}</span>
          </h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <SignIn Login={Login} error={error} />
      )}
    </div>
  );
};

export default App;
