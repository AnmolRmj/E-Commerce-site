import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../component/ContextApi";
import {  useDispatch, useSelector } from "react-redux";
import { updateCard } from "../redux/slices/AddToCard";

export const ReusableComponentFirst = ({ title, data }) => {
  const { appState, updateState } = useAppContext();
  const dispatch= useDispatch();
  const carditem=useSelector ((state)=> state)
  console.log("carditem", carditem)
  
  
  const navigate = useNavigate();
  const handleDetail = (item) => {
    updateState({
      ...appState,
      data: item,
    });
    navigate("/detail");
  };
  const addtocard = (item) => {
    // item.qty = 1;
    updateState({
      ...appState,
      addtocard: [...appState?.addtocard,...[item]],
    });
    dispatch(updateCard([...new Set([...carditem?.addtocard?.data, ...[item]])]));

  };
  
 
  return (
    <div >
      <div className="font-extrabold text-base text-[red]">{title}</div>

      <div className="grid md:grid-cols-12   grid-flow-row gap-4 ">
        {data?.map((item) => (
          <div key={item.id} className="col-span-3">
            <div>
            <Card>
              <div onClick={() => handleDetail(item)}>
                {<img alt="example" src={item.image} className="w-64 h-48" />}
                <div className="grid gap-5 md:w-1/2 w-full">
                  <div>Name:{item.name}</div>
                  <div>About:{item.description}</div>
                  <div>Price:{item.price}</div>
                  <div>Brand:{item.brand}</div>
                </div>
              </div>
            </Card>
            </div>
            <div className="justify-center mt-3">
              <div>
                <button
                  className="bg-slate-800 text-white  w-full"
                  onClick={() => addtocard(item)}>
                  Add to the cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
