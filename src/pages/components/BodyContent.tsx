import React, { useEffect, useState } from "react";
import SideBar from "./sidebar/sideBar";
import AssignmentDetails from "./assignmentSection/AssignmentDetails";
import styles from "../../styles/BodyContent.module.css"
import CandidateProfile from "./CandidateProfile";
const BodyContent = () => {


  const [flag,setFlag] = useState(false);
  const [rowId,setRowId] = useState(null);
  const [assignmentData, setAssignmentData] = useState(null);
  const [assignmentDataId1, setAssignmentDataId1] = useState(null);

  interface ScoreRowProps {
    id:number;
  }

  const handleClick: React.FC<ScoreRowProps> = (id) =>{
    console.log("Clicked");
    setRowId(id);
    setFlag(true);
  }


 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAssignmentData(data);
        setAssignmentDataId1(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.body_content}>
      <SideBar />
      <AssignmentDetails  handleClick={handleClick} assignmentData={assignmentData} />
      {flag ? <CandidateProfile rowId={rowId} handleClick={handleClick} assignmentData={assignmentData}/> : <></>}
    </div>
  );
};

export default BodyContent;
