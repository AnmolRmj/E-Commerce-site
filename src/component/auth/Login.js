import { LeftCircleOutlined } from "@ant-design/icons";
import { Card, Form, Modal, Button, Checkbox, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/LoginAction";
// import female from "../image/female.png"

export const Login = () => {
  const navigate = useNavigate();
  const [modal1Open, setModel1Open] = React.useState(false);

// const [ isLoading, setIsLoading]= React.useState(false)
const dispatch= useDispatch();



  const onFinish =  async (values) => {
    console.log("Loginaction", values)
  await userLogin(values)(dispatch).unwrap();
  navigate ('/')
    // setIsLoading(true);
    // try{
    //   const response = await userLogin(values)(dispatch).unwrap();
    // }catch (error){
    //   setIsLoading (false);
    // } finally{

    // }
  };
  const handleNavigate = () => {
    navigate(-1);
  };
  const data=useSelector((state)=> state)
  console.log("tokencheck", data);

  React.useEffect(()=> {
  if(data?.authinfo?.userToken){
  <Navigate to="/" replace />
  }
},)

  return (
    <div >
      <Card className="w-[400px]">
        
        <div className="text-center font-bold text-base mb-3">
          <LeftCircleOutlined onClick={() => handleNavigate()} />
          Login
        </div>
        <div>
          <Form onFinish={onFinish}>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>

            <div className="flex justify-between w-full cursor-pointer">
              <div>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </div>
              <div onClick={() => setModel1Open(true)} >Forget Password</div>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-[green] text-center"  >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        
      </Card>
      {modal1Open && (
        <Modal
          title="Forgot Password"
          style={{ top: 20 }}
          open={modal1Open}
          onOk={() => setModel1Open(false)}
          onCancel={() => setModel1Open(false)}
          footer={null}
        >
          <Form layout="vertical">
            <Form.Item name="password1" label="Password1">
              <Input.Password />
            </Form.Item>
            <Button className="bg-[green] text-white">Submit</Button>
          </Form>
        </Modal>
      )}
    </div>
  );
};
