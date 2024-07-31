import React from "react";
import { ReusableComponentFirst } from "./ReusableComponentFirst";
import { MostRecentProduct, hotproduct, premiumproducts } from "../component/utlis";
import { ReusableComponentSecond } from "./ResuableComponentSecond";
import { ReusableComponentThird } from "./ReusableComponentThird";
import { Carousel } from "./Carousel";
import { LatestProduct } from "./LatestProduct";
import { fetchUserData } from "../services/AllProduct";
import { useDispatch } from "react-redux";

export const Dashboard = () => {
  const dispatch= useDispatch()
  React.useEffect(()=>{
    dispatch (fetchUserData)
  })
  return (
  
    <div className=" w-full gap-y-2">
      <Carousel data={hotproduct} />
      <ReusableComponentFirst title={"Hot Product"} data={hotproduct} />
      <ReusableComponentSecond title={"Premium Product"} data={premiumproducts} />
      <LatestProduct title={'Premium'} data={premiumproducts} />
      <ReusableComponentThird title={"Most Recent Product"} data={MostRecentProduct} />
      
    </div>
    
  );
    
};
