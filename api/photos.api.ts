import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const fetchImages = async (page = 1, limit = 50) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/v2/list?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
