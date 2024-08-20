import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getContent = async () => {
  try {
    const response = await api.get("/content");
    return response.data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};
