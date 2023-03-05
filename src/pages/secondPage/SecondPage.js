import { useEffect, useRef, useLayoutEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { ShowCar } from "../../3dModel/ShowCar";
import { useInView } from "react-intersection-observer";
import "./secondPage.css";
import gsap from "gsap";
import SplitType from "split-type";

let split = new SplitType("#aboutMe", {
  type: "line",
  lineClass: "secondLines",
  charClass: "c",
});

const handleResize = () => {
  split.split();
};

const SecondPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const animateIn = (el) => {
    gsap.to(el, {
      opacity: 1,
      yPercent: 0,
      ease: "power2.out",
      duration: 1.3,
      stagger: 0.1,
    });
  };

  const [sectionRef, inView] = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  useLayoutEffect(() => {
    // Attach the event listener to the window object
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animateIn(".secondLines");
      document.title = "Vroom!";
    }
  }, [inView]);

  useEffect(() => {
    split = new SplitType("#aboutMe", {
      type: "line",
      lineClass: "secondLines",
      charClass: "c",
    });
    gsap.set(".secondLines", {
      yPercent: 100,
      opacity: 0,
    });
  }, []);

  return (
    <div
      id="sp"
      ref={sectionRef}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme !== "dark" ? "black" : "white",
      }}
    >
      <div id="left">
        <p id="aboutMe">
          A computer science student with a passion for problem solving and web
          development, always eager to tackle new challenges and improve my
          skills.
        </p>
      </div>
      <div id="right">
        <ShowCar />
      </div>
    </div>
  );
};

export default SecondPage;
