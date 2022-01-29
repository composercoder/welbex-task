export default function turnPage(arrow, changeIsTimeToFetchData, tablePageOffset, changeTablePageOffset, tablePageSize) {
  const offset = calcOffset(arrow, tablePageOffset, tablePageSize) || 0;
  changeTablePageOffset(offset);
  changeIsTimeToFetchData(true);
}

function calcOffset(arrow, tablePageOffset, tablePageSize) {
  if (arrow === 'arrow-right') {
    return tablePageOffset + tablePageSize;
  } else {
    return tablePageOffset - tablePageSize;
  }
};
