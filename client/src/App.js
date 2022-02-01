import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Arrows from './components/Arrows/Arrows';
import fetchTableData from './controller/fetchTableData';
import turnPage from './controller/turnPage';

export default function App() {
  const [tableData, setTableData] = useState(null);
  const [isTimeToFetchTableData, setIsTimeToFetchTableData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterParams, setFilterParams] = useState('?offset=0&limit=13');
  const [tablePageOffset, setTablePageOffset] = useState(0);
  const tablePageSize = 12;
  const [allowedToTurnPage, setAllowedToTurnPage] = useState({ turnLeft: false, turnRight: false });
  const [isTimeToTurnPage, setIsTimeToTurnPage] = useState(false);

  function changeTableData(newData) {
    setTableData(newData);
  }
  function changeIsTimeToFetchData(isTime) {
    setIsTimeToFetchTableData(isTime);
  }
  function changeLoadingState(newState) {
    setLoading(newState);
  }
  function changeErrorState(error) {
    setError(error);
  }
  function createFilterParamsString(filterParameter, filterCondition, filterValue) {
    setFilterParams(`?parameter=${filterParameter.selectedOption}&condition=${filterCondition.selectedOption}&value=${filterValue}&offset=${tablePageOffset}&limit=${tablePageSize}`);
  }
  function changeTablePageOffset(newOffset) {
    setTablePageOffset(newOffset);
  }
  function changeAllowanceToTurnPage(newAllowance) {
    setAllowedToTurnPage(newAllowance);
  }
  function changeIsTimeToTurnPage(arrow, isTime) {
    if (isTime) {
      turnPage(arrow, changeIsTimeToFetchData, tablePageOffset, changeTablePageOffset, tablePageSize);
    }
    setIsTimeToTurnPage(false);
  }

  useEffect(() => {
    if (isTimeToFetchTableData) {
      fetchTableData(filterParams, changeTableData, changeLoadingState, changeErrorState, changeAllowanceToTurnPage)
        .then(() => {
          setIsTimeToFetchTableData(false);
          setIsTimeToTurnPage(false);
        })
    }
  }, [isTimeToFetchTableData, isTimeToTurnPage]);

  function Content() {
    if (loading) {
      return <Loader />
    }

    return (
      <>
        <Form filterParams={filterParams} createFilterParamsString={createFilterParamsString} tablePageOffset={tablePageOffset} tablePageSize={tablePageSize} isTimeToTurnPage={isTimeToTurnPage} changeIsTimeToFetchData={changeIsTimeToFetchData} />
        { error ? <Error message={error ? error : "Что-то пошло не так, попробуйте перезагрузить страницу"}  /> : (<>
          <Table data={tableData} />
          <Arrows allowedToTurnPage={allowedToTurnPage} changeIsTimeToTurnPage={changeIsTimeToTurnPage} />
        </>) }
      </>
    )
  }

  return (
    <div className="wrapper">{ <Content /> }</div>
  );
}
