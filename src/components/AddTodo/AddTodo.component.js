import React from "react";
import { Button, Space, Input, Col, Row } from "antd";
import * as Yup from "yup";
import { useField, Form, Formik } from "formik";
import { addRequest } from "../../saga/Todos/todos.action";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import addTodoHooks from "./addTodo.hooks";
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {label}
        <Input {...field} {...props} autoComplete="on" />
      </label>
      {meta.touched || meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </>
  );
};
export default function AddTodo() {
  const { navigate, dispatch, token } = addTodoHooks();
  return (
    <>
      <div className="addTodo">
        <Row>
          <Col span={24}>
            <Formik
              initialValues={{
                name: "",
                description: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(6, "Must be 6 characters or more")
                  .required("Required"),
                description: Yup.string()
                  .min(6, "Must be 6 characters or more")
                  .required("Required"),
              })}
              onSubmit={(inputValues) => {
                dispatch(
                  addRequest(
                    inputValues,
                    token,
                    () => {
                      navigate("/private/todos");
                      toast.success("Add Todo Success");
                    },
                    () => {
                      toast.error("Add Todo Failed");
                    }
                  )
                );
              }}
            >
              <Form>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <Row>
                    <Col span={24}>
                      <MyTextInput
                        allowClear
                        label="Name Todo:"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name todo..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      {" "}
                      <MyTextInput
                        allowClear
                        label="Description:"
                        name="description"
                        id="description"
                        type="text"
                        placeholder="Description..."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginTop: 10 }}
                      >
                        Add Todo
                      </Button>
                    </Col>
                  </Row>
                </Space>
              </Form>
            </Formik>
          </Col>
        </Row>
      </div>
    </>
  );
}
