import React from "react";
import Image from "next/image";
import InfoRow from "../components/assignmentSection/InfoRow";
import InformationRow from "./CandidateScores/InformationRow";
import styles from "../../styles/BodyContent.module.css";
import { Button } from "@mui/material";
import ScoreBar from "../components/CandidateScores/scoreBar";
import avatarimg from "../../../public/avatar.png";
// import SwiperComponent from "../components/swiper";
import Carousel from "../components/Carousel";

// @ts-ignore
const CandidateProfile = ({ rowId, handleClick, assignmentData }) => {
  
  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div>
          {assignmentData && (
            <div key={assignmentData.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    fontWeight: "bold",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "38px",
                      borderRadius: "8px",
                      marginRight: "5px",
                    }}
                    src={avatarimg}
                    alt="img"
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ fontSize: "10px" }}>
                      {assignmentData[rowId - 1].full_name}
                    </p>
                    <p style={{ color: "grey", fontSize: "9px" }}>
                      {assignmentData[rowId - 1].email}
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color:
                      assignmentData[rowId - 1].score > 50
                        ? "#00B200"
                        : "orange",
                  }}
                >
                  {assignmentData[rowId - 1].score}%
                </span>
              </div>
            </div>
          )}
        </div>
        {assignmentData[rowId - 1].scores == null ? (
          <div>
            <div></div>
          </div>
        ) : (
          <h2>
            <ScoreBar rowId={rowId} assignmentData={assignmentData} />
          </h2>
        )}

<div className={styles.aboutDiv}>
  {assignmentData[rowId - 1]?.about_me != null && (
    <div className={styles.section}>
      <h2 className={styles.headers}>About</h2>
      <p>{assignmentData[rowId - 1]?.about_me}</p>
    </div>
  )}
  
  {assignmentData[rowId - 1]?.experience != null && (
    <div className={styles.section}>
      <h2 className={styles.headers}>Experience</h2>
      <p>{assignmentData[rowId - 1]?.experience}</p>
    </div>
  )}

  {assignmentData && assignmentData[0].about != null && (
    <div className={styles.section}>
      <h2 className={styles.headers}>Hobbies</h2>
      <p>{assignmentData[0].about}</p>
    </div>
  )}

  {assignmentData[rowId - 1]?.introduction != null && (
    <div className={styles.section}>
      <h2 className={styles.headers}>Introduction</h2>
      <p>{assignmentData[rowId - 1]?.introduction}</p>
    </div>
  )}
</div>


        <Button
          sx={{
            marginLeft: "25%",
            width: "200px",
            height: "25px",
            fontSize: "12px",
            backgroundColor: "#4fd1c5"
          }}
          variant="contained"
        >
          Shortlist
        </Button>
        
      </div>
      <div className={styles.videoComponent}>
        <div className={styles.carouselContainer}><Carousel/></div>
      </div>
    </div>
  );
};

export default CandidateProfile;
