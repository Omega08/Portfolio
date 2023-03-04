import { useEffect, useState } from "react";
import gsap, { Elastic } from "gsap";
import "./AnimatedText.css";

const AnimatedText = ({ str, parentId }) => {
  let curr = 0;

  return (
    <div
      id={parentId}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {str.map((e) => {
        return (
          <div
            className={e != " " ? "char" : "whiteSpace"}
            key={curr++}
            style={{
              display: "inline-block",
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
