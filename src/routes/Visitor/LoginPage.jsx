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
    <div className="min-h-screen flex  items-center justify-center  bg-gray-100" >
        <div  className="max-w-3xl   flex rounded-lg shadow-lg      ">
        <Stack
        tokens={{ childrenGap: 20 }}
        
        className="sm:w-1/2 rounded-lg bg-white  items-center p-6 "
      >
        
        <img src="https://www.uir.ac.ma/assets/_resources/img/logos/logo-color.png" alt="Logo" className=" w-20 h-20 mb-4" />

        
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
        <PrimaryButton text="Login" className="bg-[#002D74]" onClick={handleLogin} />
      </Stack>
      <img src="https://lh3.googleusercontent.com/p/AF1QipN8x1yRC3kwAWDlR0a5e_lHLWjmcLiHUBYGGllp=s1360-w1360-h1020" alt="Image" className="sm:block hidden w-1/2 rounded-r-lg " />
    
        </div>
      </div>
  );
};

export default LoginPage;
