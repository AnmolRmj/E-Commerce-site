import React from "react";
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import { Login } from "../auth/Login";
import { Signup } from "../auth/Signup";
import { Dashboard } from "../../user /Dashboard";
import { Detail } from "../../user /Detail";
import { PaymentMethod } from "../../user /PaymentMethod";
import UserList from "../admin/UserList";

import { AppStore } from "../admin/AppStore";

import HotProduct from "../admin/HotProduct";
import AdminProfile from "../admin/AdminProfile"

import { UserProfile } from "../../user /userprofile/UserProfile";
import { SearchProduct } from "../../user /SearchProduct";
import { SortingData } from "../../user /SortingData";


const AdminDashboard = React.lazy(() => import("../admin/AdminDashboard"));

const PageNotFound = React.lazy(() => import("../PageNotFound"));
const UserLayout = React.lazy(() => import("../layout/UserLayout"));
const AdminLayout = React.lazy(() => import("../layout/AdminLayout"));
const AuthLayout = React.lazy(() => import("../layout/AuthLayout"));


export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/payment" element= {<PaymentMethod />}/>
        <Route path="/user/userprofile" element= {<UserProfile />}/>
        <Route path="/searchProduct/:id" element= {<SearchProduct />}/>
        <Route path="/sortingdata" element= {<SortingData />}/>

      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="adminprofile" element={<AdminProfile/>}/> 
        <Route path="hotproduct" element={<HotProduct/>}/> 
        <Route path="userlist" element={<UserList/>}/> 
        <Route path="appstore" element={<AppStore/>}/> 
      </Route>
      <Route path="auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      
      
    </Route>
    
  )
  
);
