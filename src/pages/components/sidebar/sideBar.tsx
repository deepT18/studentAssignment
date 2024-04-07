// import React from "react";
// import altworldImage from "../../../../public/altworldIcon.png";
import HouseIcon from "@mui/icons-material/House";
import styles from "./sidebar.module.css";
// import Stack from "@mui/material/Stack";
// import { Padding } from "@mui/icons-material";
// import AddBoxIcon from '@mui/icons-material/AddBox';
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import { WrapText } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 8,
    color: "black",
    // padding: '6px 12px',
    borderRadius: '15px',
    backgroundColor: "white",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'white',
      borderColor: 'white',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'white',
      borderColor: 'white',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.dashBoardContainer}>
        <HouseIcon sx={{color:"green",height:"12px"}}/>
        <span><p>Dashboard</p></span>
      </div>
      <div className={styles.card}>
        <AddIcon />
        <span className={styles.newAssignmentText}>New Assignment?</span>
        <span className={styles.selectFromText}>Select from pre-defined questions to have a quick turn-around</span>
        {/* /* <Button>Create New Assignment</Button> */}
        <button
          style={{
            marginTop:"5px",
            fontWeight:"bold",
            border:"none",
            alignSelf:"center",
            borderRadius:"10px",
            backgroundColor:"white",
            textTransform: 'none',
            // marginLeft: "25%",
            width: "100px",
            cursor:"pointer",
            height: "20px",
            fontSize: "8px",
          }}
         
        >
          Create New Assignment
        </button> 
      </div>
    </div>
  );
};
export default SideBar;
