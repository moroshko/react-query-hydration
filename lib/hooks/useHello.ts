import { useQuery } from "react-query";

export type HelloResponse = {
  name: string;
};

export const fetchHello = async (): Promise<HelloResponse> => {
  console.log("fetchHello is called");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
      });
    }, 1000);
  });
};

export const useHello = () => {
  return useQuery<HelloResponse>("hello", fetchHello);
};
