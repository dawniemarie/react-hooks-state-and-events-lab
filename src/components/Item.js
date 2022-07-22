import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState("")

  function handleItem() {
    setItem((item) => !item);
  }

  const cart = item ? "in-cart" : "";
  const btnBg = item ? "remove" : "add";
  
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnBg} onClick = {handleItem}>
        {item ? "Remove From Cart" : "Add Cart"}
      </button>
    </li>
  );
}

export default Item;
