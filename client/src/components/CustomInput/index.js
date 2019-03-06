import React from 'react';
import { Input } from 'reactstrap';

function CustomInput({ type, name, onChange, value, ...rest }) {
  return (
    <Input
      name={name}
      type={type}
      value={value}
      onChange={e => {
        e.preventDefault();
        onChange(name, e.target.value);
      }}
      {...rest}
    />
  );
}

export default CustomInput;
