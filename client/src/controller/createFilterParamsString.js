function createFilterParamsString(onlyChangeOffset, dispatch, prevParams, tablePageOffset, tablePageSize, filterParameter, filterCondition, filterValue) {
  if (onlyChangeOffset) {
    dispatch({ action: 'setFilterParams', payload: prevParams.replace(/offset=[1-9]{2}/g, 'offset=' + tablePageOffset) });
  } else {
    dispatch({ action: 'setFilterParams', payload: `?parameter=${filterParameter.selectedOption}&condition=${filterCondition.selectedOption}&value=${filterValue}&offset=${tablePageOffset}&limit=${tablePageSize + 1}`});
  }
}
