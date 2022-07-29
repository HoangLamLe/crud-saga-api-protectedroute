import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  CheckCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { Checkbox, Button, Tooltip, Row, Col, Space } from "antd";
import { deleteRequest, completedRequest } from "../../saga/Todos/todos.action";
import { toast } from "react-toastify";
import todoHooks from "./todo.hooks";
export default function Todo(props) {
  const { name, description, userId, id, isDone } = props;
  const { navigate, dispatch, userID, token, isLogin } = todoHooks();
  const handleEdit = () => {
    navigate(`/${id}/${name}/${description}`, { replace: true });
  };
  const handleDelete = () => {
    dispatch(
      deleteRequest(
        id,
        token,
        { userId: userID },
        () => {
          toast.success("Delete Success!!!");
        },
        () => {
          toast.error("Delete Failed!!!");
        }
      )
    );
  };
  const handleChangeCheckbox = (e) => {
    dispatch(
      completedRequest(
        {
          name: name,
          description: description,
          _id: id,
          isDone: e.target.checked,
          userId: userID,
        },
        token,
        () => {
          if (e.target.checked) {
            toast.success("Set todo is done!!!");
          }
        },
        () => {
          toast.error("Set done error!!!");
        }
      )
    );
  };
  return (
    <>
      <Row>
        <Col span={16}>
          <p className="test">Content: {description}</p>
        </Col>
        <Col span={1}>
          {isDone ? (
            <CheckCircleFilled style={{ color: "#08c" }} />
          ) : (
            <CloseOutlined />
          )}
        </Col>
        {isLogin && userId === userID && (
          <Col span={5} style={{ display: "flex" }}>
            <div>
              {isDone ? (
                <Checkbox checked onChange={handleChangeCheckbox}>
                  Done
                </Checkbox>
              ) : (
                <Checkbox onChange={handleChangeCheckbox} checked={false}>
                  Done
                </Checkbox>
              )}
            </div>

            <Space>
              <Tooltip title="Delete">
                <Button
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={handleDelete}
                />
              </Tooltip>
              <Tooltip title="Edit">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={handleEdit}
                />
              </Tooltip>
            </Space>
          </Col>
        )}
      </Row>
    </>
  );
}
