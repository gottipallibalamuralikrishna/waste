import { useState, useEffect, Component } from "react";
import { Button, Fab, TextField } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

import styles from "./style.module.css";

function Inc() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `the name is ${name}`;
  }, [name]);

  return (
    <div>
        
        <TextField
            className={styles.textfield}
            type="text"
            placeholder="enter the name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            size="small"
            style={{ paddingRight: 10 }}>
        </TextField>
        <Button variant="contained">add name</Button>
        <Fab variant="circular" color="success"></Fab>
    </div>
  );
}
export { Inc };
