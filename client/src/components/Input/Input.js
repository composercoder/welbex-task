import { useState } from 'react';
import './Input.css';

export default function Input({id, value, placeholder, handleChange}) {
  return <input id={id} value={value} placeholder={placeholder} onChange={handleChange} />
}
