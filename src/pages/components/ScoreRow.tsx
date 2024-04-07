import LinearProgress from "@mui/joy/LinearProgress";
import { Stack } from "@mui/material";
import React from "react";
import styles from "../../styles/BodyContent.module.css"

const ScoreRow = ({ title, score }) => {
  return (
    <div className={styles.scoreRow}>
      <div style={{ flex: 1, textAlign: "left", fontSize: "10px" }}>
        <strong>{title}</strong>
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>
        <Stack spacing={4} sx={{ flex: 1 }}>
          <div>
            <LinearProgress determinate style={{color: score>6 ? "#00B200" : "orange"}} value={score*10} />
          </div>
        </Stack>
      </div>
      <div style={{ flex: 1, textAlign: "right", fontSize: "10px", color: score>6 ? "#00B200" : "orange" }}>
        <span style={{ fontSize: "10px" }}>{score}/10</span>
      </div>
    </div>
  );
};

export default ScoreRow;
