import React from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { NavLink } from "react-router-dom";
const CardDisplay = () => {
  const { data, isLoading, isLoadingError } = useQuery("data", () => {
    return axios.get("https://apibuilds.herokuapp.com/api/blogs");
  });
  console.log(data);

  const RemoveData = useMutation((id) => {
    return axios.delete(`https://apibuilds.herokuapp.com/api/blog/${id}`);
  });

  return (
    <Container>
      <Holder>
        {data?.data?.data?.map((props) => (
          <Card key={props._id}>
            <ImageView src={props.picture} />
            <Title>{props.title}</Title>
            <PriceRange>#{props.price}</PriceRange>
            <ButtonHolder>
              <MainButton to={`/edit/${props._id}`}>Edit</MainButton>
              <MainButton2
                onClick={() => {
                  RemoveData.mutate(props._id);
                  // window.location.reload();
                }}
              >
                Delete
              </MainButton2>
            </ButtonHolder>
          </Card>
        ))}
      </Holder>
    </Container>
  );
};

export default CardDisplay;

const Holder = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;

const ButtonHolder = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 10px;
`;
const MainButton = styled(NavLink)`
  height: 40px;
  width: 100px;
  background-color: rgba(225, 225, 225, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const MainButton2 = styled.button`
  height: 40px;
  width: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
`;

const Container = styled.div`
  /* margin-top: 50px; */
  /* margin: 10px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`;
const ImageView = styled.img`
  height: 200px;
  background-color: white;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  margin: 10px;
`;
const PriceRange = styled.div`
  margin: 10px;
`;
const Card = styled.div`
  /* height: 300px; */
  width: 300px;
  background: #0e2f5a;
  border-radius: 5px;
  color: white;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  margin: 10px;
`;
