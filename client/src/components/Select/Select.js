import './Select.css';

export default function Select({id, options, handleChange}) {
  return (
    <select id={id} onChange={handleChange}>
      {options.map((option, index) => {
        return <option key={index} id={option.id}>{option.value}</option>
      })}
    </select>
  )
}
