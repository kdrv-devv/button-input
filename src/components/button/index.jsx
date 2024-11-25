import React from 'react';

const Button = ({ children, onClick, style = {}, disabled = false, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: disabled ? "#ccc" : "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
