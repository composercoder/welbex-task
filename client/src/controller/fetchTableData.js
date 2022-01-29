export default async function fetchTableData(filterParams, changeTableData, changeLoadingState, changeErrorState, changeAllowanceToTurnPage) {
  fetch('http://localhost:5000' + filterParams)
    .then((res) => {
      if (res.ok) { return res.json() };
      throw res;
    })
    .then((data) => {
      changeTableData(data.data);
      changeAllowanceToTurnPage({
        turnLeft: data.allowedToTurnLeft,
        turnRight: data.allowedToTurnRight
      });
      changeErrorState(null);
    })
    .catch((res) => {
      changeErrorState(res.status === 404 ? 'Таких записей в таблице не найдено' : 'Произошла ошибка, попробуйте перезагрузить страницу')
    })
    .finally(() => changeLoadingState(false));
}
