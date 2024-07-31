import { Card, Form } from "antd";
import { Button, Checkbox, Input } from "antd";
import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

export const Signup = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handlenavigate = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[green] text-white">
      <Card>
        <div className="flex justify-center ">
          <LeftCircleOutlined onClick={handlenavigate} />
          Sign up
        </div>
        <div>
          <Form onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-12 gap-x-2 w-full">
              <div className="col-span-6">
                <Form.Item
                  label="First Name"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Middle Name" name="middlename">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item
                  label="Last Name"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Address" name="address">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Phone Numner" name="number">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <div className="col-span-6">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item
                  label="Confirm Password"
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please re-input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
            </div>

            <div>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[green] text-white"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
};
