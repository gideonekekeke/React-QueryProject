import React from "react";
import {
  Avatar,
  Button,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import pic from "./img/my2.jpg";
import { makeStyles } from "@mui/styles";
import { useQuery } from "react-query";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

const useStyles = makeStyles({
  rule: {
    // background: "red",
    justifyContent: "center",
    alignItems: "center",
    dispaly: "flex",
    width: "80%",
  },

  changeB: {
    // backgroundColor: "red",
    color: "white",
    display: "none",
  },
});
const Body1 = () => {
  const classes = useStyles();

  const { data, isLoading, isError } = useQuery("data", () => {
    const url = "https://fakestoreapi.com/products";
    const res = axios.get(url);

    return res;
  });

  console.log(data);

  return (
    <div
      style={{
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        dispaly: "flex",
      }}
    >
      <div>
        {isError && <div>Network failure</div>}
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Skeleton variant="rectangular" width={345} height={200} />
              <Skeleton width={345} height={50} />
            </div>
          </div>
        ) : (
          <>
            <Grid spacing={1} className={classes.rule} container>
              {data?.data?.map((props, i) => (
                <Grid item sm={2}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      height="200px"
                      component="img"
                      image={props.image}
                    />
                    <CardContent>
                      <Typography variant="h5">{props.category}</Typography>
                      <Typography variant="body2">
                        {props.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button>Learn More</Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.changeB}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default Body1;
