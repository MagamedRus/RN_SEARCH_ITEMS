import axios from "axios";
import { IP_SERVER, PATH_CATEGORY } from "../constants/server";

export const getCategories = async (page, path) => {
  let result = { items: [], pageCount: 0 };
  await axios
    .get(`${IP_SERVER}${PATH_CATEGORY}`, {
      params: {
        page: page || null,
        path: path || null,
      },
    })
    .then(async (res) => {
      const data = res.data;
      if (data) {
        const { items, _meta } = data;
        result = { items, meta: _meta };
      }
    })
    .catch((err) => console.log("getCategories err -", err));

  return result;
};

export const getCategorySubs = async (categoryId) => {
  let result = [];
  await axios
    .get(`${IP_SERVER}${PATH_CATEGORY}${categoryId}`, {
      params: {
        expand: "sub_categories",
      },
    })
    .then((res) => {
      const data = res.data;
      if (data) result = data.sub_categories;
    })
    .catch((err) => console.log("getCategorySubs err -", err));
  return result;
};
