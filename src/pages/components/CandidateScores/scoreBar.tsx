import React from "react";
// import Stack from "@mui/joy/Stack";
// import LinearProgress from "@mui/joy/LinearProgress";
import styles from "../../../styles/BodyContent.module.css";
import ScoreRow from "../ScoreRow";

// @ts-ignore
const ScoreBar = ({ rowId, assignmentData }) => {
  return (
    <div>
      {assignmentData && (
        <div
          style={{
            color: "grey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div className={styles.scoreContainer}>
            <ScoreRow
              title={assignmentData[rowId - 1].scores[0].score_type}
              score={assignmentData[rowId - 1].scores[0].user_score}
            />
            <ScoreRow
              title={assignmentData[rowId - 1].scores[1].score_type}
              score={assignmentData[rowId - 1].scores[1].user_score}
            />
            <ScoreRow
              title={assignmentData[rowId - 1].scores[2].score_type}
              score={assignmentData[rowId - 1].scores[2].user_score}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreBar;
