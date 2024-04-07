import React, { useEffect, useState } from "react";
import InformationRow from "./InformationRow";
import InfoRow from "../assignmentSection/InfoRow";

interface Candidate {
  id?: number; // Optional property
  full_name: string;
  email: string;
  score: number;
  about_me?: string; // Optional property
  experience?: string; // Optional property
  hobbies?: string; // Optional property
  introduction?: string; // Optional property
  scores?: Score[]; // Optional property
}

interface Score {
  score_type: string;
  user_score: number;
  min_score: number;
  max_score: number;
}

// @ts-ignore
const CandidateAndScore = ({handleClick,assignmentData}) => {
  // const [candidateDetails, setCandidateDetails] = useState<Candidate[]>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setCandidateDetails(data);
  //       console.log(candidateDetails);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div style={{marginBottom: "20px", paddingRight:"20px"}}>
      <InfoRow title="CANDIDATE" value="SCORE"/>
      {assignmentData &&
        assignmentData.map((candidate: { id: React.Key | null | undefined; full_name: any; email: any; score: any; }) => (
          <div key={candidate.id}>
            <InformationRow handleClick={handleClick} id={candidate.id} name={candidate.full_name}  email={candidate.email}  score={candidate.score} />
          </div>
        ))}
    </div>
  );
};

export default CandidateAndScore;
