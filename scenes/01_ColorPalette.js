export function ColorPalette(ctx) {
  const numOfColumns = 30;
  const numOfRows = 20;

  const colWidth = canvas.width / numOfColumns;
  const rowHeight = canvas.height / numOfRows;

  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < numOfColumns;
      colIndex++
    ) {
      ctx.fillStyle = `rgb(44, ${
        (255 / numOfRows) * rowIndex
      }, ${(255 / numOfColumns) * colIndex})`;
      ctx.fillRect(
        colWidth * colIndex,
        rowHeight * rowIndex,
        colWidth - 1,
        rowHeight - 1
      );
    }
  }
}
