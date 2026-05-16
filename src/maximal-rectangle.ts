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
function maximalRectangle(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0]!.length === 0) {
    return 0;
  }
  const columnsCount = matrix[0]!.length;
  const histogramHeights = new Array(columnsCount).fill(0);
  let maxRectangleArea = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (matrix[row]![col] === 1) {
        histogramHeights[col] += 1;
      } else {
        histogramHeights[col] = 0;
      }
    }
    const currentRowsMaxArea = largestRectangleArea(histogramHeights);
    if (currentRowsMaxArea > maxRectangleArea) {
      maxRectangleArea = currentRowsMaxArea;
    }
  }
  return maxRectangleArea;
}

const matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

console.log(maximalRectangle(matrix));
