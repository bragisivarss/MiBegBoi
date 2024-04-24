import axios from "axios";

export const fetchData = async (term = "", size = 10) => {
  const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                        size: size,
                    },
                }
    );

  return data;
};
