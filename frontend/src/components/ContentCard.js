import React from "react";

const ContentCard = ({ title, description, owner }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-sm text-gray-500">By {owner.username}</p>
    </div>
  );
};

export default ContentCard;
