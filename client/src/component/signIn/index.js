import React, { useState } from "react";
import {
  Avatar,
  TextField,
  Checkbox,
  Button,
  Link,
  Box,
  Grid,
  Typography,
  Container,
  FormControlLabel,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function SignIn({ Login, error }) {
  const [forms, setForms] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(forms);
  };

  return (
    <form onSubmit={submitHandler}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, backgroundColor: "green" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error != "" ? <div className="error">{error}</div> : ""}
          <TextField
            margin="normal"
            label="Email Address"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setForms({ ...forms, email: e.target.value })}
            value={forms.email}
          />
          <TextField
            margin="normal"
            label="Password"
            type="password"
            required
            fullWidth
            name="password"
            autoComplete="password"
            onChange={(e) => setForms({ ...forms, password: e.target.value })}
            value={forms.password}
          />
          <FormControlLabel
            control={<Checkbox value="Password" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link>Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
}
