/** 
 *  @param {Number} numb - Current number
 *  @param {Number} maxNumb - Max allows number
 *  @returns {Number} - Number less or equals to maxNumb
 */
 export function getBeforeMaxNumber(numb, maxNumb) {
    let result = maxNumb;
    if (parseInt(numb, 10) <= parseInt(maxNumb, 10)) {
      result = numb;
    }
    return result;
  }