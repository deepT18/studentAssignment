import React from "react";

const InfoRow = ({ title, value }) => {
  return (
    <div
      style={{ color:"grey" ,display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <div style={{ flex: 1, textAlign: "left" }}>
        <strong>{title}</strong>
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>
        <strong>{value}</strong>
      </div>
    </div>
  );
};

export default InfoRow;
