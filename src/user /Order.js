import React from "react";

import {
  DeleteFilled,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../redux/slices/AddToCard";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const [orderdata, setOrderData] = React.useState([]);
  console.log("orderdata", orderdata);
  const dispatch = useDispatch();

  const carditem = useSelector((state) => state);
  console.log("carditem", carditem);

  const handleAdd = (id) => {
    const addtoqty = orderdata.map((item) => {
      if (id === item?.id) {
        return {
          ...item,
          qty: item?.qty + 1,
        };
      } else {
        return {
          ...item,
        };
      }
    });

    dispatch(updateCard(addtoqty));
  };

  const handleDelete = (id) => {
    dispatch(
      updateCard(carditem?.addtocard?.data?.filter((item) => item?.id !== id))
    );
  };

  React.useEffect(() => {
    setOrderData(carditem?.addtocard?.data);
  }, [carditem?.addtocard?.data]);

  const handleMinus = (id, qty) => {
    if (qty > 1) {
      const minustoqty = orderdata.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            qty: item?.qty - 1,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      dispatch(updateCard(minustoqty));
    }
  };
  const total= orderdata.reduce((accumulator, currentItem)=>{
    return accumulator+currentItem?.price * currentItem?.qty;
  },0)
  const navigate=useNavigate()
    const ordernow=()=>{
        navigate('/payment');}

   
  
  return (
    <div>
      {orderdata.map((item) => (
        <div key={item?.id} className="flex justify-start gap-3 items-center">
          <div className="w-[60px] h-auto">
            <img src={item?.image} alt="display" />
          </div>
          <div className=" grid  font-light">
            <div className="p-2">
              <div className="font-bold">{item?.name}</div>
              <div>${item?.price}</div>
              <div>{item?.brand}</div>
              <div>Qty:{item?.qty}</div>
              <div className=" font-bold">Total: ${item?.price * item?.qty}</div>
            </div>
          </div>
          <div className="grid justify-end">
            <div>
              <PlusCircleFilled
                className="text-red"
                onClick={() => handleAdd(item?.id)}
              />
            </div>
            <div>
              <DeleteFilled onClick={() => handleDelete(item?.id)} />
            </div>
            <div>
              <MinusCircleFilled
                onClick={() => handleMinus(item?.id, item?.qty)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className=" flex justify-around bg-green-100">
        <div> Overall Price: ${total} </div>
      </div>

      <div className=" grid justify-center p-2 " onClick={ordernow}> 
        <Button>Order Now</Button>
      </div>
    </div>
  );
};
