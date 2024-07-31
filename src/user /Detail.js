import React from "react";
import { useAppContext } from "../component/ContextApi";
import Slider from "react-slick";
import TextArea from "antd/es/input/TextArea";
import { Button, Rate } from "antd";
import RelatedProduct from "./RelatedProduct";

export const Detail = () => {
  const { appState } = useAppContext();
  console.log("updated app state:", appState);
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={appState?.data?.image} alt="example" />
        </div>
      );
    },
    dots: true,
    dotClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };
  
  console.log("appstate", appState);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div>
        <div className="md:grid grid-cols-12 grid-flow-row  ">
          <div className="md:col-span-6 md:ml-[10rem]">
            <div className="sm:w-1/2 md:w-[480px] max-h-32px h-35 bg-black ">
              <Slider {...settings}>
                <div>
                  <img
                    src={appState?.data?.image}
                    className="h-30 w-full"
                    alt="example"
                  />
                </div>
                <div>
                  <img
                    src={appState?.data?.image}
                    className="h-30 w-full"
                    alt="example"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="md:col-span-6 grid ">
            <div>{appState?.data?.name}</div>
            <div>Price:${appState?.data?.price}</div>
            <div className="flex gap-2">
              
              <div>Rs:{appState.data.price-appState.data.price*appState.data.discount/100}</div>
              <div className="line-through">Actual Price:{appState?.data?.price}</div>
              <div>{appState?.data?.discount}% OFF</div>
            </div>
            <div className="flex gap-2 ">
              <div>View :{appState?.data?.view}</div>
              <div>In Stock:{appState?.data?.stock}</div>
            </div>
            <div>{appState?.data?.brand}</div>
            <div>{appState?.data?.description} </div>
            <div>
              <TextArea
                rows={3}
                placeholder=""
                maxLength={10000}
                value={appState?.data?.comment}
              />
            </div>
            <div>
              <Rate
                allowHalf
                value={appState?.data?.rating}
                defaultValue={2.5}
                className="text-[#ff8800]"
              />
            </div>
            <div className=" flex">
              <div>
                <Button className="bg-slate-800 text-white w-full  ">
                  Buy Now
                </Button>
              </div>
              <div>
                <Button className="bg-slate-800 text-white w-full">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <RelatedProduct
            data={appState?.data?.relatedProduct}
            title={"Related Product"}
          />
        </div>
      </div>
    </div>
  );
};
