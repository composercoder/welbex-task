import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App/AppContext';
import createFilterParamsString from '../../controller/createFilterParamsString';

import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitButton from '../SubmitButton/SubmitButton';

import './Form.css';

function Form() {
  const [appState, dispatch] = useContext(AppContext);

  const [filterParameter, setFilterParameter] = useState({
    id: 'filter-parameter-select',
    selectedOption: 'name'
  });
  const [filterCondition, setFilterCondition] = useState({
    id: 'filter-condition-select',
    selectedOption: 'contains'
  });
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    if (appState.isTimeToCreateFilterParams) {
      createFilterParamsString(true, dispatch, appState.filterParams, appState.tablePageOffset, appState.tablePageSize, filterParameter, filterCondition, filterValue);
    }

  });

  function handleChange(event) {
    switch(event.target.id) {
      case 'filter-parameter-select':
        setFilterParameter({
          id: event.target.id,
          selectedOption: event.target.options[event.target.selectedIndex].id
        });
        break;
      case 'filter-condition-select':
        setFilterCondition({
          id: event.target.id,
          selectedOption: event.target.options[event.target.selectedIndex].id
        });
        break;
      case 'filter-value-input':
        setFilterValue(event.target.value);
    }
  }

  function handleSubmit(event) {
    if (event) {
      event.preventDefault()
    }
    validateInput(filterValue);
    createFilterParamsString(false, filterParameter, filterCondition, filterValue, appState.tablePageOffset, appState.tablePageSize);
    dispatch({ type: 'setIsTimeToFetchData', payload: true });
  }

  return (
    <form>
      <legend>Параметры сортировки:</legend>
      <Select id="filter-parameter-select" options={[{id: "name", value: "название"}, {id: "quantity", value: "количество"}, {id: "distance", value: "расстояние"}]} handleChange={handleChange} />
      <Select id="filter-condition-select" options={[{id: "contains", value: "содержит"}, {id: "more", value: "больше"}, {id: "less", value: "меньше"}, {id: "equals", value: "равно"}]} handleChange={handleChange} />
      <Input id="filter-value-input" value={filterValue} placeholder="значение" handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </form>
  );
}

function validateInput(inputValue) {
  if (inputValue.match(/^[a-zA-Zа-яА-Я0-9]{1,30}$/)) {
    return true;
  }
  return false;
}

export default Form;
