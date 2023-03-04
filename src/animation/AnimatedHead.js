import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedHead = ({ children, id }) => {
  const [sectionRef, inView] = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  const animateIn = (el) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      duration: 1.1,
      stagger: 0.075,
    });
  };

  const animateOut = (el) => {
    gsap.to(el, {
      opacity: 0,
      scale: 1.5,
      ease: "power2.out",
      stagger: 0.05,
    });
  };

  useEffect(() => {
    if (inView) {
      animateIn(`.${id}char`);
    } else {
      animateOut(`.${id}char`);
    }
  }, [inView]);

  useEffect(() => {
    const split = new SplitType(`#${id}p`, {
      type: "char",
      charClass: `${id}char`,
    });
    gsap.set(`.${id}char`, {
      opacity: 0,
      scale: 1.5,
    });
  }, [id]);

  return (
    <div id={id} ref={sectionRef}>
      <p id={`${id}p`}>{children}</p>
    </div>
  );
};

export default AnimatedHead;
