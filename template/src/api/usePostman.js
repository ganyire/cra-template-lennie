import axios from "axios";
import useAuth from "./useAuth";

const usePostman = async (body, contentType = "application/json") => {
  //!

  const { accessToken } = useAuth();

  let headers = {
    Accept: "application/json",
    "Content-Type": contentType,
  };

  const init = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
    timeout: 100000,
    withCredentials: false,
  });

  let cleanData = null;

  Object.keys(body).forEach((key) => {
    if (body[key] === null || body[key] === "") {
      delete body[key];
    }
  });

  cleanData = body;

  if (contentType == "multipart/form-data") {
    const formData = new FormData();
    Object.keys(body).forEach((key) => {
      formData.append(key, body[key]);
    });
    cleanData = formData;
  }

  return { init, cleanData };

  //!
};

export default usePostman;
