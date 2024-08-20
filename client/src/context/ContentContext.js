// src/context/ContentContext.js

import React, { createContext, useEffect, useState } from "react";
import { api } from "../utils/apiUtils";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  const fetchContent = async () => {
    try {
      const response = await api.get("/content");
      setContent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
};
