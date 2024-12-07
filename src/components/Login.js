import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (user) {
      alert(`Login successful!`);
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      if (user.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/upload";
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
