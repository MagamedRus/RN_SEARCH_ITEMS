import axios from "axios";
import { IP_SERVER, PATH_ITEMS } from "../constants/server";

export const getItems = async (page, categoryId) => {
  let result = { items: [], pageCount: 0 };

  await axios
    .get(`${IP_SERVER}${PATH_ITEMS}`, {
      params: {
        category_id: categoryId || null,
        page: page || null,
        
      },
    })
    .then((res) => {
      const data = res.data;
      if (data) {
        const { items, _meta } = data;
        result = { items, meta: _meta };
      }
    })
    .catch((err) => console.log("getItems req err -", err));

  return result;
};
