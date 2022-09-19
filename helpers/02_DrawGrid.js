export function drawColumns(ctx, numOfColumns) {
  const columnWidth = canvas.width / numOfColumns;

  for (
    let colIndex = 0;
    colIndex < numOfColumns;
    colIndex++
  ) {
    ctx.fillRect(
      columnWidth * colIndex,
      0,
      columnWidth - 2,
      canvas.height
    );
  }
}

export function drawRows(ctx, numOfRows) {
  const rowHeight = canvas.height / numOfRows;

  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    ctx.fillRect(
      0,
      rowIndex * rowHeight,
      canvas.width,
      rowHeight - 2
    );
  }
}

export function drawGrid(ctx, numOfColumns, numOfRows) {
  const colWidth = canvas.width / numOfColumns;
  const rowHeight = canvas.height / numOfRows;

  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    for (
      let colIndex = 0;
      colIndex < numOfColumns;
      colIndex++
    ) {
      ctx.fillRect(
        colWidth * colIndex,
        rowHeight * rowIndex,
        colWidth - 1,
        rowHeight - 1
      );
    }
  }
}
