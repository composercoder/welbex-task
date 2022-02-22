import { useContext } from 'react';
import createFilterParamsString from './createFilterParamsString';

export default function turnPage(arrow, appState, dispatch) {
  const offset = calcOffset(arrow, appState.tablePageOffset, appState.tablePageSize) || 0;

  dispatch({ type: 'changeTablePageOffset', payload: offset});
  createFilterParamsString(true, dispatch, appState.filterParams, offset, appState.tablePageSize);
  dispatch({ type: 'setIsTimeToFetchTableData', payload: true});
}


function calcOffset(arrow, tablePageOffset, tablePageSize) {
  if (arrow === 'arrow-right') {
    return tablePageOffset + tablePageSize;
  } else {
    return tablePageOffset - tablePageSize;
  }
};
