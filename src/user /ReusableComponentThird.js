import { Avatar, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../component/ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../redux/slices/AddToCard";



export const ReusableComponentThird = ({ title, data }) => {
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
    <div>
      <div className="font-extrabold text-base text-[red]">{title}</div>
     
      <div className="grid grid-cols-12 grid-flow-row gap-4">
      
        {data?.map((item) => (
          <div key={item.id} className="col-span-4" >
            
            <Card>
            
              <div className="grid gap-2 " onClick={() => handleDetail(item)}>
                <div className="flex justify-center">
                <Avatar src={item.image} />
                </div>
                <div className="text-center font-bold">{item.name}</div>
                <div className="text-pretty  text-center ">{item.description}</div>
                
              </div>
             
            </Card>
            <div className="justify-center">
                  <button 
                  className="bg-slate-800 text-white w-full" onClick={() => addtocard(item)} >Add to the cart</button>
                </div>
            
          </div>
        ))}
       
      </div>
      
    </div>
  );
};
