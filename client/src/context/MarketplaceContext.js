// src/context/MarketplaceContext.js

import React, { createContext, useEffect, useState } from "react";
import { api } from "../utils/apiUtils";

export const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const response = await api.get("/marketplace");
      setListings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <MarketplaceContext.Provider value={{ listings, fetchListings }}>
      {children}
    </MarketplaceContext.Provider>
  );
};
