import "./ContentTemplate1.css";
// import productImage from '../../Assets/about-banner.png'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContentTemplate1 = ({
  title,
  description,
  image,
  isReverse,
  isDark = false,
}) => {
  const [flexDirection, setflexDirection] = useState("row");
  const [gap, setGap] = useState("0vh");

  useEffect(() => {
    if (isReverse === true) {
      setflexDirection("row-reverse");
    }
    if (window.screen.width <= 720) {
      setflexDirection("column");
      setGap("3vh");
    }
  }, []);

  const mobile_res = window.screen.width <= 720;
  const title_attributes = !mobile_res
    ? {
        initial: { x: isReverse ? -500 : 500 },
        whileInView: { x: 0, transition: { duration: 2 } },
        viewport: { once: true },
      }
    : {
        initial: { x: 0 },
      };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5vh",
        flexDirection: flexDirection,
        gap: gap,
        // backgroundImage: "#fff"
      }}
    >
      {/* {isReverse === true ? document.getElementsByClassName("ContentTemplate1-main-container").style.flexDirection = "row-reverse" : ""} */}
      <div className="ContentTemplate1-left">
        <div className="content-container">
          <div
            className="title"
            style={{ color: isDark ? "white" : "#000" }}
          >
            {title}
          </div>
          <div
            className="description"
            style={{ color: isDark ? "white" : "#000" }}
          >
            {description}
          </div>
        </div>
      </div>
      <div className="ContentTemplate1-right">
        <div className="content2-container">
          <motion.img
            {...title_attributes}
            className="content-image"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default ContentTemplate1;
