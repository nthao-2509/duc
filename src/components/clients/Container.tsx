import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
