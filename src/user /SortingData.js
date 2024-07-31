import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSortingData } from "../services/AllProduct";

export const SortingData = () => {
  const options = [
    {
      value: "desc",
      label: "Desc",
    },
    {
      value: "brand",
      label: "Brand",
    },
  ];
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sortingdata.products
);
  

  React.useEffect(() => {
    dispatch(fetchSortingData());
  }, [dispatch]);
  console.log("daadkj", data);
  const handleChange = (value, options) => {
    console.log("dkjg", value, options);
    dispatch(fetchSortingData(value));
  };

  return (
    <div>
      SortingData
      <div>
        <Select
          placeholder="Sorting"
          onSelect={handleChange}
          options={options}
          allowClear={true}
        />
      </div>
      <div>
        <h3>Products:</h3>
        {data.map((Products) => (
          <div key={Products.id}>
            <img src={Products.image} alt={Products.name} style={{ maxWidth: "100px" }} />
            <p>{Products.description}</p>
            <p>Brand: {Products.brand}</p>
            <p>Price: ${Products.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
