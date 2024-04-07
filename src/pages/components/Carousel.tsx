import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import avatarImage from "../../../public/AssignmentScreen1.png";
import styles from "../../../src/styles/BodyContent.module.css";

function SimpleSlider() {
  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: "30vh",
    adaptiveHeight: true,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
    customPaging: function (i) {
      return (
        <div
          className={`${styles.dot} slick-dots`}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        />
      );
    },
  };

  const questions = [
    "What is your favorite color?",
    "What is your favorite animal?",
    "What is your favorite food?",
    "What is your favorite hobby?",
    "What is your favorite movie?",
    "What is your favorite book?",
    "What is your favorite season?",
    "What is your favorite place to visit?",
    "What is your favorite music genre?",
    "What is your favorite sport?",
    "What is your favorite thing to do on weekends?",
  ];
  
 // @ts-ignore
  function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-arrow ${className} arrow-container ${styles.arrow}`}
        style={style}
        onClick={onClick}
      >
        <div className={`arrow arrow-${props.type}`} />
      </div>
    );
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {questions.map((question, index) => (
          <div className={styles.slide} key={index}>
            <Image src={avatarImage} alt="Alt Image" className={styles.image} />
            <div className={styles.textCount}>
              <h5 className={styles.text}>{question}</h5>
              <span className={styles.count}>{index + 1}/11</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
