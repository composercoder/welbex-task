import createFilterParamsString from './createFilterParamsString';

export default function turnPage(arrow, appState, dispatch) {
  const offset = calcOffset(arrow, appState.tablePageOffset, appState.tablePageSize) || 0;

  dispatch({ type: 'changeTablePageOffset', payload: offset});
  createFilterParamsString({
    onlyChangeOffset: true,
    tablePageOffset: offset,
    tablePageSize: appState.tablePageSize,
    prevFilterParams: appState.filterParams,
    newFilterParams: null,
    dispatch
  });
  dispatch({ type: 'setIsTimeToFetchData', payload: true });
}


function calcOffset(arrow, tablePageOffset, tablePageSize) {
  if (arrow === 'arrow-right') {
    return tablePageOffset + tablePageSize;
  } else {
    return tablePageOffset - tablePageSize;
  }
};
