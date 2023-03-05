import { useState, useEffect, useContext } from "react";
import AnimatedText from "../../animation/AnimatedText";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../ThemeContext";
import LoadingScreen from "../../loader/LoadingScreen";
import gsap from "gsap";
import "./FirstPage.css";

const FirstPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [sectionRef, inView] = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      document.title = "Welcome!";
    }
  }, [inView]);

  const moveMouse = (e) => {
    gsap.to("#firstOverlay", {
      clipPath: `circle(200px at ${(e.clientX / window.innerWidth) * 100}% ${
        (e.clientY / window.innerHeight) * 100
      }%)`,
      duration: 0.3,
    });
  };

  const boom = (e) => {
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 700);
    const timeline = gsap.timeline();
    timeline
      .to("#firstOverlay", {
        clipPath: `circle(100% at 50% 50%)`,
        duration: 0.6,
      })
      .to("#firstOverlay", {
        clipPath: `circle(200px at ${(e.clientX / window.innerWidth) * 100}% ${
          (e.clientY / window.innerHeight) * 100
        }%)`,
        duration: 0.6,
      });
  };

  const shrink = (e) => {
    gsap.to("#firstOverlay", {
      clipPath: `circle(0px at ${(e.clientX / window.innerWidth) * 100}% ${
        (e.clientY / window.innerHeight) * 100
      }%)`,
      duration: 0.4,
    });
  };

  return (
    <div ref={sectionRef} style={{ height: "100%" }}>
      <div
        style={{ height: "100%", width: "100%" }}
        onMouseMove={(e) => moveMouse(e)}
        onMouseLeave={(e) => shrink(e)}
      >
        <div
          id="firstOverlay"
          style={{
            backgroundColor: theme !== "dark" ? "black" : "white",
            color: theme !== "dark" ? "white" : "black",
          }}
        >
          <div className="heading">
            <p id="intro">Hello, I'm</p>
            <AnimatedText str={"Om Kamble".split("")} parentId="myName" />
          </div>
          <div className="description">
            <p>
              " Welcome to my portfolio! Take a look around and see what I've
              been working on. "
            </p>
          </div>
          <div id="boom1" onClick={(e) => boom(e)}>
            BOOM!
          </div>
        </div>
        <div
          id="firstBehind"
          style={{
            backgroundColor: theme === "dark" ? "black" : "white",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          <div className="heading">
            <p id="intro">Hello, I'm</p>
            <AnimatedText str={"Om Kamble".split("")} parentId="myName" />
          </div>
          <div className="description">
            <p>
              " Welcome to my portfolio! Take a look around and see what I've
              been working on. "
            </p>
          </div>
          <div id="boom2" onClick={(e) => boom(e)}>
            BOOM!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
