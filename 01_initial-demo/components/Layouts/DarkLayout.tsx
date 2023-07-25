import { FC, ReactNode } from "react";

const DarkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
