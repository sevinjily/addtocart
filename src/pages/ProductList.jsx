import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.Products));
    console.log(Products);
  }, []);

  // ...

  return (
    <>
      <section>
        <div className="producList h-[100vh] w-full border-black scroll-p-10">
          <h1 className="flex h-full w-full justify-center font-extrabold text-3xl">
            Welcome to Product List!
          </h1>
        </div>
        {Products.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </section>
    </>
  );
};
export default ProductList;
