import Cashier from "../cashier/Cashier";

import classes from "./Login.module.css";

import { loginBg } from "../../assets";

const Login = () => {
  return (
    <>
      <div className={classes.login}>
        <Cashier />
        <img src={loginBg} alt="background" />
      </div>
    </>
  );
};

export default Login;
