import React, { useState } from "react";
import { Stack, TextField, PrimaryButton } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{ width: 300 }}
        className="bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <TextField
          label="Username"
          value={username}
          onChange={(event, newValue) => setUsername(newValue)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event, newValue) => setPassword(newValue)}
        />
        <PrimaryButton text="Login" onClick={handleLogin} />
      </Stack>
    </div>
  );
};

export default LoginPage;
