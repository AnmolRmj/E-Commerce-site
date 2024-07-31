import { Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCard } from "../redux/slices/AddToCard";
import { useAppContext } from "../component/ContextApi";

export const ReusableComponentSecond = ({ title, data }) => {
  const { appState, updateState } = useAppContext();
  const dispatch= useDispatch();
  const carditem=useSelector ((state)=> state)
  console.log("carditem", carditem)

  const navigates=useNavigate()
  const handleDetails=()=>{
      navigates('/detail');}
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
      <div className="font-extrabold text-base text-[red] ">{title}</div>
      <div className="grid grid-cols-12 grid-flow-row gap-4 ">
        {data?.map((item) => (
          <div key={item.id} className="col-span-4" >
            <Card>
              <div className="grid" onClick={()=>handleDetails((item))}>
                <div className=" flex justify-start gap-2">
                  <div> {<img alt="example" src={item.image} className='w-64 h-48'/>}</div>
                  <div>
                    <div className="text-sm font-bold text-[red]">price:{item.price}</div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
                <div>{item.description}</div>
                
              </div>
            </Card>
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
