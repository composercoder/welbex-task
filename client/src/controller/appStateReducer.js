export default function appStateReducer(state, action) {
  switch (action.type) {
    case 'setFilterParams':
      return {...state, filterParams: action.payload };
    case 'fetchTableData':
      return {...state, tableData: action.payload.data,  error: action.payload.error,  allowedToTurnPage: action.payload.allowedToTurnPage };
    case 'setIsTimeToFetchTableData':
      return {...state,  isTimeToFetchTableData: action.payload};
    case 'setLoadingState':
      return {...state, loading: action.payload};
    case 'setError':
      return {...state, error: action.payload};
    case 'changeTablePageOffset':
      return {...state, tablePageOffset: action.payload};
    case 'setIsTimeToTurnPage':
      return {...state, isTimeToTurnPage: action.payload};
    case 'resetAllIsTimes':
      return {...state,
        isTimeToFetchTableData: action.payload.isTimeToFetchTableData,
        isTimeToTurnPage: action.payload.isTimeToTurnPage};
    default:
      return state;
  }
}
