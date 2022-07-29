/* eslint-disable react-hooks/exhaustive-deps */
import { List, Row, Col, Spin } from "antd";
import { Todo } from "../../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRequest } from "../../saga/Todos/todos.action";
import React, { useEffect } from "react";
import { setCurrentPage } from "../../saga/Todos/todos.action";
import "antd/dist/antd.min.css";
import listTodoHooks from "./listTodo.hooks";
const ListTodo = (props) => {
  const { dispatch, listTodo, token, loading, currentPage } = listTodoHooks();
  useEffect(() => {
    dispatch(fetchRequest(JSON.parse(token) ? JSON.parse(token) : "null"));
  }, []);

  return (
    <>
      <Row className="listTodo">
        <Col span={24}>
          {loading ? (
            <Spin
              tip="Loading..."
              style={{ width: "100%", height: "100%" }}
              size="large"
            ></Spin>
          ) : (
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  dispatch(setCurrentPage(page));
                },
                pageSize: 4,
                defaultCurrent: currentPage,
              }}
              dataSource={listTodo}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                    title={<div>Title: {item.name}</div>}
                  />
                  <Todo
                    key={item.id}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    userId={item.userId}
                    isDone={item.isDone}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
      <ToastContainer />
    </>
  );
};

export default ListTodo;
