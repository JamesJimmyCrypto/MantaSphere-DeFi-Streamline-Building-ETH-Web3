// src/context/GovernanceContext.js

import React, { createContext, useEffect, useState } from "react";
import { api } from "../utils/apiUtils";

export const GovernanceContext = createContext();

export const GovernanceProvider = ({ children }) => {
  const [proposals, setProposals] = useState([]);

  const fetchProposals = async () => {
    try {
      const response = await api.get("/governance");
      setProposals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  return (
    <GovernanceContext.Provider value={{ proposals, fetchProposals }}>
      {children}
    </GovernanceContext.Provider>
  );
};
