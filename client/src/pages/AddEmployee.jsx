import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SideNav from "../components/Main/SideNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../context/Context";
import { addTenantPropertyRoute } from "../utils/APIRoutes";
import RoundLoader from "../components/Loaders/RoundLoader";
import toastOptions from "../components/Toast/ToastOptions";
import AddEmployeeContainer from "../components/Main/AddEmployeeContainer"
import { authAxios } from "../utils/Axios";

function AddEmployee() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
    phone: "",
    address: "",
    description: "",
  });
  const { dispatch, isFetching } = useContext(Context);

  useEffect(() => {
    document.title = "Add Property - CareTaker Admin";
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation()) {
        dispatch({ type: "LOGIN_START" });
        const res = await authAxios.post(addTenantPropertyRoute, values);
        if (res.data.status === false) {
          dispatch({ type: "LOGIN_FAILURE" });
          toast.error(res.data.msg, toastOptions);
        }
        if (res.data.status === true) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setTimeout(() => {
            navigate("/");
          }, 7000);
          toast.success(res.data.msg, toastOptions);
        }
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      // toast.error("Internal server error occured", toastOptions);
    }
  };

  const handleValidation = () => {
    const { firstName, lastName, email, gender, phone, address, description } =
      values;
    if (firstName === "") {
      toast.error("First name is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (lastName === "") {
      toast.error("Last name is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (gender === "") {
      toast.error("Gender is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (phone === "") {
      toast.error("Phone number is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (address === "") {
      toast.error("Address is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (description === "") {
      toast.error("Description is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
        <Container className="bg-light">
          <main className="main row">
            <SideNav />
            <AddEmployeeContainer
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              RoundLoader={RoundLoader}
            />
          </main>
        </Container>
        <ToastContainer />
    </>
  );
}

const Container = styled.div`
overflow: hidden;
  main {
  }
`;

export default AddEmployee;
