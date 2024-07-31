import { Avatar, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

 const RelatedProduct = ({ title, data }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/detail");
  };
  

  return (
    <div >
      <div className="font-extrabold text-base text-[red]">{title}</div>

      <div className="grid grid-cols-12 grid-flow-row gap-4">
        {data?.map((item) => (
          <div key={item.id} className="col-span-4" onClick={handleBack}>
            <Card>
              <div className="grid gap-2 ">
                <div className="flex justify-center">
                  <Avatar src={item.image} />
                </div>
                <div className="text-center font-bold">{item.name}</div>
                <div className="text-pretty  text-center ">
                  {item.description}
                </div>
                <div className= "justify-center flex gap-1 text-[white]">
                  <div className="w-full">
                    <button className="bg-slate-800 w-full">
                      Buy Now
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="bg-slate-800  w-full" >
                      Add to the cart
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedProduct