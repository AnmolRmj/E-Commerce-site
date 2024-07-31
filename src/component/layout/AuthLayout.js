import React from 'react'
import { Outlet } from 'react-router-dom'


 const AuthLayout = () => {
  
  return (
    <div className=' flex justify-center pt-[5rem]'>
        <Outlet/>
    </div>
  )
}
export default AuthLayout
