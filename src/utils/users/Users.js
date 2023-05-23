import React from "react";

import { cashier } from "../../contants";
import classes from "./Users.module.css";
import { Flex } from "@mantine/core";

const Users = () => {
  return (
    <div className={classes.contain}>
      {cashier.map((cash) => (
        <div className={classes.rows}>
          <div className={classes.users} key={cash.id}>
            <img src={cash.images} alt="users" />
          </div>
          <span>{cash.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Users;
