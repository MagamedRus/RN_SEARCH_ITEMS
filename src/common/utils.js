export const isScrolledToRight = (nativeEvent, predictWidth = 25) => {
  const contentWidth = nativeEvent.contentSize.width;
  const layoutWidth = nativeEvent.layoutMeasurement.width;
  const offsetX = nativeEvent.contentOffset.x;
  const rightScrollPos = layoutWidth + offsetX;
  return rightScrollPos > contentWidth - predictWidth;
};
