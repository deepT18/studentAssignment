import Image from "next/image";
import proImage from "../../../public/avatar.png";
// import styles from "../../styles/BodyContent.module.css";

// @ts-ignore
const InformationRow = ({ handleClick, id, name, email, score }) => {

  const handleClickonEachRow = () => {
    handleClick(id); // Pass the id to handleRowClick
  };

  return (
    <div onClick={handleClickonEachRow} style={{
      cursor: "pointer",
      marginBottom: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "bold"
    }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          style={{ height: "32px", width: "30px", borderRadius: "8px", marginRight: "10px" }}
          src={proImage}
          alt="img"
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "13px" }}>{name}</p>
          <p style={{ fontSize: "11px" }}>{email}</p>
        </div>
      </div>

      <span style={{ fontSize: "100px", color: score > 50 ? "#00B200" : "orange" }}>{score}%</span>

    </div>
  );
};

export default InformationRow;
