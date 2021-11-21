import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Avatar, Button, Checkbox, Paper, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: "345px",
    // height: "400px",
  },
  text: {
    width: "90%",
    margin: "20px",
    height: "60px",
  },

  inp: {
    color: "red",
  },
});

const Body2 = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const schema = yup.object({
    Fullname: yup.string().required(),
    age: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value) => {
    console.log(value);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <div>SignUp </div>
        <Paper className={classes.paperStyle} elevator={20}>
          <Avatar>
            <AllInclusiveIcon />
          </Avatar>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={classes.text} variant="standard">
              <InputLabel>Fullname</InputLabel>
              {errors && (
                <InputLabel color="error">
                  {errors.Fullname?.message}
                </InputLabel>
              )}
              <Input
                type="Fullname"
                name="Fullname"
                {...register("Fullname", { required: true })}
              />
            </FormControl>

            <FormControl className={classes.text} variant="standard">
              <InputLabel>age</InputLabel>
              {errors && (
                <InputLabel color="error">{errors.age?.message}</InputLabel>
              )}
              <Input type="age" name="age" {...register("age")} />
            </FormControl>

            <FormControl className={classes.text} variant="standard">
              <InputLabel>email</InputLabel>
              {errors && (
                <InputLabel color="error">{errors.email?.message}</InputLabel>
              )}
              <Input type="email" name="email" {...register("email")} />
            </FormControl>
            <FormControl className={classes.text} variant="standard">
              <InputLabel htmlFor="filled-adornment-password">
                password
              </InputLabel>
              {errors && (
                <InputLabel color="error" htmlFor="filled-adornment-password">
                  {errors.password?.message}
                </InputLabel>
              )}
              <Input
                {...register("password")}
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControlLabel
              width="300px"
              label="A Terms and Conditions agreement or a Privacy Policy are legally binding agreements."
              control={
                <Checkbox
                  onChange={handleChanges}
                  color="secondary"
                  checked={checked}
                />
              }
            />
            {checked ? (
              <Button
                type="submit"
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
          </form>
        </Paper>
      </Wrapper>
    </Container>
  );
};

export default Body2;

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
