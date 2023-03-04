import { useEffect, useState } from "react";
import gsap, { Bounce, Elastic } from "gsap";
import "./loadingScreen.css";

const getLetters = (string) => {
  let curr = 0;
  return (
    <div
      id="myText"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {string.map((e) => {
        return (
          <div
            className="namechar"
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

let index = 0;
const array = ["LOADING..", "WAIT"];

const LoadingScreen = () => {
  const [str, setStr] = useState("LOADING..");

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        index++;
        index = index % array.length;
        setStr(array[index]);
      },
    });
    timeline
      .set(".namechar", { y: -155 })
      .to(".namechar", { y: 0, stagger: 0.15, duration: 0.2, ease: Elastic })
      .to(
        ".namechar",
        { y: 155, stagger: 0.15, duration: 0.2, ease: Elastic },
        `${(str.length - 1) * 0.15 + 2}`
      );
  }, [str]);

  return (
    <div id="loaderContainer">
      <div id="wrapper">
        <div id="loadFirst">{getLetters(str.split(""))}</div>
        <div id="loadSecond">
          <img id="loader" src={require("./loader.gif")}></img>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
