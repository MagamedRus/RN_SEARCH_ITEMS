/**
 * @param {number} pageCount - count of pages obj in arr
 * @returns {Array<object>} page numbers & ids
 * */
export const getPagesArr = (pageCount = 0) => {
  let result = [];
  for (let i = 1; i <= pageCount; i++) {
    result.push({ id: i.toString(), value: i });
  }
  return result;
};
