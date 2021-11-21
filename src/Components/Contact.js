import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

const Contact = () => {
  const { data, isLoading } = useQuery("user", () => {
    const url = "https://swapi.dev/api/people";
    const res = axios.get(url);

    return res;
  });
  console.log(data);
  return (
    <div>
      <div>this is the query page</div>

      {isLoading ? (
        <div>
          {" "}
          <Skeleton width="300px" />
          <Skeleton width="300px" />
          <Skeleton width="300px" />
          <Skeleton width="300px" />
          <Skeleton width="300px" />
        </div>
      ) : (
        <div>
          {data?.data.results.map((props, i) => (
            <div key={i}>{props.name} </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;
