function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i]!;
    let leftBoundary = i;
    while (leftBoundary > 0 && heights[leftBoundary - 1]! >= currentHeight) {
      leftBoundary--;
    }
    let rightBoundary = i;
    while (
      rightBoundary < heights.length - 1 &&
      heights[rightBoundary + 1]! >= currentHeight
    ) {
      rightBoundary++;
    }
    const currentWidth = rightBoundary - leftBoundary + 1;
    const currentArea = currentHeight * currentWidth;
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }
  return maxArea;
}
