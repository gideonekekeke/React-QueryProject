import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import * as yup from "yup";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  // const [imageUrl, setImageUrl] = useState("");
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    picture: yup.mixed().required("A file is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // const uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("picture", files);

  //   data.append("upload_presets", "giddy_images");
  //   const res = await axios.post(
  //     "https://api.cloudinary.com/v1_1/giddy/image/upload",
  //     data
  //   );

  //   const file = await res.json();

  //   setImageUrl(file.secure_url);
  //   console.log(file);
  // };

  // const onSubmit = (data) => {

  // };

  const onSubmit = useMutation((data) => {
    const formData = new FormData();
    formData.append("picture", data.picture[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    console.log(formData);
    return axios.post("https://apibuilds.herokuapp.com/api/blog", formData);
  });

  const createSubmit = (data) => {
    console.log(data);
    onSubmit.mutate(data);
    navigate("/");
  };

  return (
    <Container>
      <Card onSubmit={handleSubmit(createSubmit)}>
        <TextHold>
          <span>upload image</span>
          <input
            onChange={(e) => e.target.files}
            {...register("picture")}
            type="file"
            name="picture"
            placeholder="upload image"
            style={{ height: "40px", width: "350px" }}
          />
        </TextHold>
        <TextHold>
          <span>title</span>
          <input
            {...register("title")}
            placeholder="title"
            style={{ height: "40px", width: "350px" }}
          />
        </TextHold>
        <TextHold>
          <span>Description</span>
          <input
            {...register("description")}
            placeholder="Description"
            style={{ height: "60px", width: "350px" }}
          />
        </TextHold>
        <TextHold>
          <span>Price(#)</span>
          <input
            {...register("price")}
            type="number"
            placeholder="price"
            style={{ height: "40px", width: "350px" }}
          />
          <Button type="submit" variant="contained">
            Upload
          </Button>
        </TextHold>
        {/* <div>{imageUrl.secure_url}hgu</div> */}
      </Card>
    </Container>
  );
};

export default CreateProject;

const TextHold = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 10px;
  margin-top: 20px;
  flex-direction: column;

  span {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const Card = styled.form`
  /* height: 400px; */
  width: 400px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  background-color: white;
  padding: 10px;
  margin-top: 200px;
  Button {
    height: 50px;
    margin-top: 30px;
    background-color: #0e2f5a;
  }
`;
