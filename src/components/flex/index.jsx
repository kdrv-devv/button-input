import React from 'react';

const Flex = ({ children, direction = "row", justify = "flex-start", align = "center", style = {}, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
