import React from 'react';

const Alert = ({ message, type = "info", style = {}, ...props }) => {
  const backgroundColors = {
    success: "#d4edda",
    error: "#f8d7da",
    warning: "#fff3cd",
    info: "#d1ecf1",
  };

  const textColors = {
    success: "#155724",
    error: "#721c24",
    warning: "#856404",
    info: "#0c5460",
  };

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: backgroundColors[type] || "#d1ecf1",
        color: textColors[type] || "#0c5460",
        border: `1px solid ${textColors[type]}`,
        borderRadius: "5px",
        ...style,
      }}
      {...props}
    >
      {message}
    </div>
  );
};

export default Alert;
