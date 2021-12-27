import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { authHandler } from "../Store/actions";

function SignUp() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let history = useHistory();

  const rules = {
    email: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please input your E-mail!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your password!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          const regex =
            /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
          if (getFieldValue("password") === value || value.match(regex)) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The password that you entered is not valid!")
          );
        },
      }),
    ],
  };

  const onFinish = (data) => {
    dispatch(authHandler({ ...data, id: uuidv4() }));
    history.push("/todo-list");
  };

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item name="email" label="E-mail" rules={rules.email}>
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={rules.password}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
