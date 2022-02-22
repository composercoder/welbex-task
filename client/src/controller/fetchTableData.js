export default async function fetchTableData(filterParams, dispatch) {
  fetch('http://localhost:5000' + filterParams)
    .then((res) => {
      if (res.ok) { return res.json() };
      throw res;
    })
    .then((res) => {
      dispatch({ type: 'fetchTableData', payload: res });
    })
    .catch((res) => {
      dispatch({
        type: 'setError',
        payload: res.status === 404 ? 'Таких записей в таблице не найдено'
        : 'Произошла ошибка, попробуйте перезагрузить страницу'
      });
    })
    .finally(() => {
      dispatch({ type: 'setLoadingState', payload: false });
    });
}
