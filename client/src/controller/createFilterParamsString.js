export default function createFilterParamsString(params) {

  const { dispatch, filterParameter, filterCondition, filterValue, prevFilterParams, onlyChangeOffset, tablePageOffset, tablePageSize } = params;

  if (onlyChangeOffset) {
    dispatch({ type: 'setFilterParams', payload: prevFilterParams.replace(/offset=[1-9]{2}/g, 'offset=' + tablePageOffset) });
  } else {
    dispatch({ type: 'setFilterParams', payload: `?parameter=${filterParameter.selectedOption}&condition=${filterCondition.selectedOption}&value=${filterValue}&offset=${tablePageOffset}&limit=${tablePageSize + 1}`});
  }

}
