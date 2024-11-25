import React from 'react';

const Input = ({ type = "text", placeholder = "", value, onChange, style = {}, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        ...style,
      }}
      {...props}
    />
  );
};

export default Input;
