import React from "react";
import "./Organic.css";
import all_product from "../Assets/all_product";
import Item from "../Item/Item";

const Organic = () => {
  const categoryToFilter = "organic";

  const filteredProducts = all_product.filter(
    (item) => item.category === categoryToFilter
  );
  return (
    <div className="heading">
      <div className="popular-item">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Organic;
