export default function turnPage(direction, isTimeToFetchTableData, setIsTimeToFetchTableData, tablePageOffset, setTablePageOffset, tablePageSize) {
  const offset = calcOffset(direction, tablePageOffset, tablePageSize) || 0;
  setTablePageOffset(offset);
  setIsTimeToFetchTableData(true);
}

function calcOffset(direction, tablePageOffset, tablePageSize) {
  if (direction === 'right') {
    return tablePageOffset + tablePageSize;
  } else {
    return tablePageOffset - tablePageSize;
  }
};
