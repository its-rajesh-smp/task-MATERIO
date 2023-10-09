//IMPORTS
import React, { useState } from "react";
import { Box, Paper, Button, FormControlLabel, Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { FacebookRounded, Twitter, GitHub, Google } from "@mui/icons-material";

//CSS IMPORT
import "./Login.scss";
import { authUser } from "../../redux/reducers/authSlice";

function Login() {
  const dispatch = useDispatch();
  const [userRoleInput, setUserRoleInput] = useState("ADMIN");

  /**
   * On Form Submit Handeler
   */
  const onClickSubmitHandeler = (event) => {
    event.preventDefault();
    dispatch(authUser({ userRole: userRoleInput }));
  };

  return (
    <Box className="loginPage_Box">
      <Paper elevation={10} className="loginPage_Box_Paper">
        <h1>LOGIN</h1>

        <Box className="loginPage_Box_Paper_box">
          <h2>Welcome To Your Account</h2>
          <p>Please sign-in to your account and start the adventure</p>
        </Box>

        <form className="loginPage_Box_Paper_form">
          <Box className="loginPage_Form_box">
            <TextField
              value={userRoleInput}
              onChange={(e) => setUserRoleInput(e.target.value)}
              label="Email"
            />
            <TextField label="Password" />

            <Box className="login_rememberSection_box">
              <FormControlLabel
                className="login_rememberCheckbox"
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
              <p className="login_forgotPassword">Forgot Password</p>
            </Box>
          </Box>

          <Button
            className="loginPage_loginButton"
            onClick={onClickSubmitHandeler}
            variant="contained"
          >
            Login
          </Button>
        </form>

        <p className="loginPage_switch_p">
          New on our platform? <span>Create an account</span>
        </p>

        <div className="or_line_div">
          <div></div>
          <p>or</p>
          <div></div>
        </div>

        <Box className="icons_group_container">
          <FacebookRounded />
          <Twitter />
          <Google />
          <GitHub />
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
