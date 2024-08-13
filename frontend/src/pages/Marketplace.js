import React, { useEffect, useState } from "react";

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/marketplace")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold mt-2">${item.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
