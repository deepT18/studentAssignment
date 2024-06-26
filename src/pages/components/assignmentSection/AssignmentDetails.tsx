import React, { useEffect, useState } from "react";
import InfoRow from "./InfoRow";
import styles from "../../../styles/BodyContent.module.css";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Button from "@mui/material/Button";
import ViewListIcon from "@mui/icons-material/ViewList";
import CandidateAndScore from "../CandidateScores/candidateScore";

interface AssignmentData {
  title: string;
  status: string;
  link: string;
  duration_in_seconds: number;
}

interface AssignmentDetailsProps {
  handleClick: (id: any) => void;
  assignmentData: AssignmentData | null;
}

const AssignmentDetails: React.FC<AssignmentDetailsProps> = ({ handleClick, assignmentData }) => {
  const [assignment, setAssignment] = useState<AssignmentData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAssignment(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const durationInHours = assignment
    ? Math.floor(assignment.duration_in_seconds / 3600)
    : null;

  return (
    <div className={styles.assignmentDetails}>
      {assignment && (
        <div>
          <div className={styles.status}>
            <h4>{assignment.title}</h4>
            <h4
              style={{
                color: assignment.status === "Active" ? "#00B200" : "inherit",
              }}
            >
              {assignment.status}
            </h4>
          </div>
          <InfoRow
            title="Assignment Link"
            value={<a href={assignment.link}>{assignment.link}</a>}
          />

          <InfoRow
            title="Assignment Hour"
            value={`${durationInHours !== null ? durationInHours : ''} ${
              durationInHours !== null && durationInHours > 1 ? "hours" : "hour"
            }`}
          />

          <InfoRow title="Assignment Ends at" value="11 March 2024" />
        </div>
      )}
      <div className={styles.btnDiv}>
        <Button
          style={{
            height: "25px",
            width: "100px",
            color: "black",
            marginRight: "2px",
            fontSize: "8px",
            borderRadius: "10px",
          }}
          startIcon={<ViewInArIcon />}
        >
          <strong>TO REVIEW</strong>
        </Button>
        <Button
          style={{
            height: "25px",
            width: "100px",
            color: "black",
            fontSize: "8px",
            borderRadius: "10px",
          }}
          startIcon={<ViewListIcon />}
        >
          <strong>SHORTLISTED</strong>
        </Button>
      </div>
      <CandidateAndScore handleClick={handleClick} assignmentData={assignmentData} />
    </div>
  );
};

export default AssignmentDetails;
