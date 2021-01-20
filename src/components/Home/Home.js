import React from "react";
import { Link } from "react-router-dom";
import {
  FormContainer,
  Form,
  FormH1,
  FormH3,
  FormInput,
  FormBtn,
} from "./HomeElements";

const Home = () => {
  return (
    <FormContainer>
      <Form>
        <FormH1>Welcome</FormH1>
        <FormH3>Get the weather where you live</FormH3>
        <FormInput placeholder="Your name" />
        <FormInput placeholder="Your city" />
        <Link to="/forecast">
          <FormBtn>Search</FormBtn>
        </Link>
      </Form>
    </FormContainer>
  );
};

export default Home;
