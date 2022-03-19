import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { border, borderRadius, Box } from "@mui/system";

export const useStyles = makeStyles((theme) => {
  // form :{
  //   maxWidth: 330,
  //   margin:" 0 auto",
  //   display: "flex",
  //   flexDirection: "column",
  //   background: "white",
  //   padding: 20,
  //   marginTop: 30,
  // },
  // formButton :{
  //   marginTop: 50,
  // },
});

const Login = () => {
  const classes = useStyles();
  const handleChange = () => {};
  return (
    <div
      style={{
        height: "80vh",
        borderRadius: 20,
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "100px auto",
          border: "1px solid gray",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "700",
          }}
        >
          Welcome back
        </Typography>
        <form
          style={{
            maxWidth: 330,
            height:"30vh",
            margin: " 0 auto",
            display: "flex",
            flexDirection: "column",
            background: "white",
            padding: 20,
            marginTop: 30,
          }}
        >
          <TextField
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={handleChange}
            type="text"
            style={{
              marginTop: 20,
            }}
          />
          <TextField
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={handleChange}
            type="password"
            style={{
              marginTop: 20,
            }}
          />
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography>Don't have an account </Typography>
          </Box>

          <Button
            color="primary"
            style={{
              marginTop: 50,
              background: "blue",
              color: "white",
              marginBottom: 50,
            }}
          >
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";
// // import "./styles.css";

// import { Button, TextField } from "@mui/material";

// export default function Login () {

//   handleChange = (e) => {
//     // this.setState({ [e.currentTarget.id]: e.currentTarget.value });
//   };

//   return (

//   );
// }
