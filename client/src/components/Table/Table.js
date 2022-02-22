import { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import './Table.css';

export default function Table() {
  const data = useContext(AppContext)[0].tableData;

  return (
    <table>
      <caption>Забеги Украины</caption>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Участники</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return tableRow(row, index);
        })}
      </tbody>
    </table>
  )
}


function tableRow({event_date, name, quantity, distance}, index) {
  return (
    <tr key={index}>
      <td>{event_date.slice(0,10)}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{distance} км</td>
    </tr>
  );
}
