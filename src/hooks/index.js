import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* const useGet = async () => {
    const { data } = await axios.get(`https://api.github.com/repos/tannerlinsley/react-query`);
    return data;
} */

const useProducts = () => {
    return useQuery ({
        queryKey: ["repoData"],
        queryFn: async () => {
            const { data } = await axios.get("https://dummyjson.com/products");
            return data;
        }
    });
}

export { useProducts }