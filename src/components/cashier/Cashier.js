import React from "react";

import classes from "./Cashier.module.css";
import Users from "../../utils/users/Users";
import Button from "../../utils/button/Button";

const Cashier = () => {
  return (
    <div className={classes.cashier}>
      <div style={{ marginBottom: "1em" }}>
        <Users />
      </div>
      <Button type="button-primary-border">Login</Button>
    </div>
  );
};

export default Cashier;
