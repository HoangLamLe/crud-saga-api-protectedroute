import React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../../../saga/Auth/auth.action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isLoadingSelector } from "../../../../saga/Auth/auth.selector";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
        <Input {...field} {...props} autoComplete="on" />
      </label>
      {meta.touched || meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(isLoadingSelector);
  return (
    <>
      <Row>
        <Col span={24}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              cfpassword: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("Email is required")
                .matches(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/s,
                  "Must be email"
                ),
              password: Yup.string()
                .min(6, "Must be 6 characters or more")
                .required("Password is required"),
              cfpassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            })}
            onSubmit={(values) => {
              const email = values.email;
              const password = values.password;
              dispatch(
                registerRequest(
                  { email, password },
                  () => {
                    navigate("/login");
                    toast.success("Register Success!!!");
                  },
                  (message) => {
                    toast.error(message);
                  }
                )
              );
            }}
          >
            <Form>
              <MyTextInput
                style={{ marginTop: "4px" }}
                label="Email:"
                name="email"
                id="email"
                type="text"
                placeholder="Your email..."
              />
              <MyTextInput
                style={{ marginTop: "4px" }}
                label="Password:"
                name="password"
                id="password"
                type="password"
                placeholder="Your password..."
              />
              <MyTextInput
                style={{ marginTop: "4px" }}
                label="Confirm PassWord:"
                name="cfpassword"
                id="cfpassword"
                type="password"
                placeholder="Your password..."
              />
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: "4px" }}
              >
                Register
              </Button>
            </Form>
          </Formik>
        </Col>
        <Col span={2} offset={22}>
          {loading && <Spin tip="Loading..." />}
        </Col>
      </Row>
    </>
  );
}
