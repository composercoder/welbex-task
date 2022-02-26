export default function createFilterParamsString({onlyChangeOffset, tablePageOffset, tablePageSize, prevFilterParams, newFilterParams, dispatch}) {

  if (onlyChangeOffset) {
    dispatch({ type: 'setFilterParams', payload: prevFilterParams.replace(/offset=(\d){1,2}/, 'offset=' + tablePageOffset) });
  } else {
    const { filterParameter, filterCondition, filterValue } = newFilterParams;
    dispatch({ type: 'setFilterParams', payload: `?parameter=${filterParameter.selectedOption}&condition=${filterCondition.selectedOption}&value=${filterValue}&offset=${tablePageOffset}&limit=${tablePageSize + 1}`});
  }

}
