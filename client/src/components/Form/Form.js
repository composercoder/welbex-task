import { useState } from 'react';
import './Form.css';
import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitButton from '../SubmitButton/SubmitButton';

function Form({filterParams, setFilterParams, tablePageOffset, tablePageSize, setIsTimeToFetchTableData, pageTurned}) {
  const [filterParameter, setFilterParameter] = useState({
    id: 'filter-parameter-select',
    selectedOption: 'name'
  });
  const [filterCondition, setFilterCondition] = useState({
    id: 'filter-condition-select',
    selectedOption: 'contains'
  });
  const [filterValue, setFilterValue] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);

  if (pageTurned) {
    handleSubmit();
  }

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
    // set filter params
    setTimeout(() => {console.log(filterParams)}, 1000);
    setIsTimeToFetchTableData(true);
  }

  return (
    <form>
      <legend>Параметры сортировки:</legend>
      <Select id="filter-parameter-select" options={[{id: "name", value: "название"}, {id: "quantity", value: "количество"}, {id: "distance", value: "расстояние"}]} handleChange={handleChange} />
      <Select id="filter-condition-select" options={[{id: "contains", value: "содержит"}, {id: "more", value: "больше"}, {id: "less", value: "меньше"}, {id: "equals", value: "равно"}]} handleChange={handleChange} />
      <Input id="filter-value-input" value={filterValue} placeholder="значение" handleChange={handleChange} />
      <SubmitButton submitDisabled={submitDisabled} handleSubmit={handleSubmit} />
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
