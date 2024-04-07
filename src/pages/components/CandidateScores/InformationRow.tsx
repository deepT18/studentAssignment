import Image from "next/image";
import avatarimg from "../../../../public/avatar.png";
import styles from "../../../styles/BodyContent.module.css";
import CandidateProfile from "../CandidateProfile";
import { constants } from "perf_hooks";

const InformationRow = ({handleClick, id, name, email, score }) => {
  

  const handleClickonEachRow = () => {

    handleClick(id); // Pass the id to handleRowClick
  };

  return (
    <div  onClick={handleClickonEachRow} className={styles.rowComponent}>
      <div style={{display:"flex", flexDirection:"row"}}>
        <Image
          style={{ height: "32px", width: "30px", borderRadius: "8px" , marginRight:"5px"}}
          src={avatarimg}
          alt="img"
        />

        <div style={{ display: "flex", flexDirection: "column" , justifyContent:"center"}}>
          <p style={{fontSize:"10px"}}>{name}</p>
          <p style={{color:"grey", fontSize:"9px"}}>{email}</p>
        </div>
      </div>

      <span style={{fontSize:"12px", color:score>50 ? "#00B200" : "orange"}}>{score}%</span>
    
    </div>
  );
};
export default InformationRow;
{
  /* <a href="" title="user icons">User icons created by kmg design - Flaticon</a> */
}
