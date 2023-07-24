import React from "react";
import { provider, auth } from "./Config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import useCookie from "../hooks/useCookie";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../redux/slice/account";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
const Signup = () => {
  const { setCookie } = useCookie();
  const navigate = useNavigate();
  const onFinish = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        setCookie(userCredential.user.accessToken);
        localStorage.setItem("account", JSON.stringify(userCredential.user));
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        const errorMessage = error.message;
        // ..
      });
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div className=" relative flex h-[100vh] bg-slate-400 ">
      <div className="  absolute w-[500px] top-[50%] left-[50%] p-[50px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] bg-white">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                min: 6,
                message: "Password should be at least 6 characters!",
              },
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className=" flex flex-col gap-5">
              <Button
                type="default"
                htmlType="submit"
                className="pt-1 pb-1 pl-2 pr-2 border-[1px] cursor-pointer "
              >
                Create account
              </Button>
              <Link to={"/login"}>Already have account?</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
