import React from "react";
import styled from "styled-components";
import { Avatar, Button, Checkbox, Paper, TextField } from "@mui/material";
import ButtonComp from "./ButtonGroup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormControlLabel } from "@mui/material";

const Home = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const paperStyle = { padding: "20px", width: "300px" };
  const text = { width: "90%", margin: "10px" };

  return (
    <Container>
      <Wrapper>
        <div>SignUp Now</div>
        {/* <ButtonComp vart="contained">Test 1</ButtonComp>
        <ButtonComp vart="outlined">Test 2</ButtonComp>
        <br /> */}
        <Paper style={paperStyle} elevator={20}>
          <Avatar></Avatar>

          <TextField placeholder="fullName" style={text} variant="standard" />
          <TextField placeholder="Age" style={text} variant="standard" />
          <TextField placeholder="Email" style={text} variant="standard" />
          <TextField
            type="password"
            placeholder="Password"
            style={text}
            variant="standard"
          />
          <FormControlLabel
            width="300px"
            label="A Terms and Conditions agreement or a Privacy Policy are legally binding agreements."
            control={
              <Checkbox
                onChange={handleChange}
                color="secondary"
                checked={checked}
              />
            }
          />
          {checked ? (
            <Button
              startIcon={<AccountCircleIcon />}
              variant="contained"
              color="secondary"
            >
              SignUp
            </Button>
          ) : (
            <Button
              disabled={true}
              startIcon={<AccountCircleIcon />}
              variant="contained"
              color="secondary"
            >
              SignUp
            </Button>
          )}
        </Paper>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
