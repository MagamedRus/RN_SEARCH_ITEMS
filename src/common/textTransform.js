import React from "react";

/** Excluding currency sign from parent tag */
export const getOnlyCurrencySign = (currencySign) => {
  let result = "";
  let isOpen = false;
  for (let el of currencySign) {
    if (el === "<") isOpen = false;
    if (isOpen) result += el;
    if (el === ">") isOpen = true;
  }
  return result;
};
