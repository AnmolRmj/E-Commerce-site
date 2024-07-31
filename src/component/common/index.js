import { Button, Form, Input,  Upload,  message } from "antd";
import React from "react";

export const FormItem = (props) => {
  return <Form.Item {...props}>{props.children}</Form.Item>;
};

export const AntdUploader = (props) => {
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const [imageUrl, setImageUrl] = React.useState();
  const handleChange = (info) => {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
      });
  };

  const uploadButton = (
    <button type="button">
      <div className=" my-7 size-4">Upload</div>
    </button>
  );
  const tempRule = [
    {
      required: props.required,
      message: `Please Enter ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <Form.Item {...props} rules={localrules}>
      <Upload name="avatar" listType={props.listType}
        className="avatar-uploader" showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" className=" rounded-full 
          size-12 object-cover "/>) :
           (uploadButton)}
      </Upload>
    </Form.Item>
  );
};

export const AntdInput = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please Enter ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} rules={localrules}>
      <Input
        onClick={props.onClick}
        onChange={props.onChange}
        type={props.type}
        className=" w-1/2 bg-slate-300 border-none"
      />
    </FormItem>
  );
};

export const SaveButton = (props) => {
  return (
    <Button className=" w-40" {...props}>
      {props.name}
    </Button>
  );
};

export const EditButton = (props) => {
  return (
    <Button className="bg-yellow-500" {...props}>
      Edit
    </Button>
  );
};