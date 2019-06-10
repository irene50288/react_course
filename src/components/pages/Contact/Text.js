import React from 'react';

const Text = ({name, value, onChange, label}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      name={name}
      id={name}
      type='text'
      value={value}
      onChange={onChange}/>
  </div>

)

export default Text;