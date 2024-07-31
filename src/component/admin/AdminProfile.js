import React from 'react'
import { AntdInput, AntdUploader, SaveButton } from '../common'
import { Form } from 'antd'


const AdminProfile = () => {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div>
      <div className=' flex justify-between'>
      
      <AntdUploader/>
      </div>
      <Form onFinish={handleFinish} layout="vertical">
      <div className=' grid grid-cols-4 gap-3 px-10' >
      <div className=' col-span-2'>
        <AntdInput required name="inputa" label={<h1 className=' font-varela'>First Name</h1>}/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="inputm" label={<h1 className=' font-varela'>Middle Name</h1>}/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="inputb" label={<h1 className=' font-varela'>Last Name</h1>}/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="inputc" label="Email" type="email"/>
      </div>
      <div className=' col-span-2'>
        <AntdInput required name="inputd" label="Phone" type="number"/>
      </div>
      <div className=' col-span-4 text-center'>
      <SaveButton name="save" htmlType="submit" className=" bg-emerald-300 w-2/6 font-varela"/>
          
      </div>
      </div>
      </Form>
    </div>
  )
}

export default AdminProfile