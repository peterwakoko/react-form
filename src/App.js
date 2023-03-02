import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log("Form submitted!");
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset> */}

        <div>
          <label htmlFor="user_first_name">First Name</label>
          <br />
          <input
            type="text"
            id="user_first_name"
            name="user_first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_last_name">Last Name</label>
          <br />
          <input
            type="text"
            id="user_last_name"
            name="user_last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_email">Email</label>
          <br />
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_password">Password</label>
          <br />
          <input
            type="password"
            id="user_password"
            name="user_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="user_confirm_password">Confirm Password</label>
          <br />
          <input
            type="password"
            id="user_confirm_password"
            name="user_confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button disabled={!confirmPassword} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
