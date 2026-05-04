import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef();
  const svgRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    // rotate whole svg
    gsap.to(svgRef.current, {
      rotate: 360,
      duration: 2,
      ease: "linear",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    // animate arc movement
    gsap.to(progressRef.current, {
      strokeDashoffset: -200,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
    });

    // exit
    tl.to({}, { duration: 2.5 })
      .to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });

  }, []);

  return (
    <div
      ref={containerRef}
      className="preloader"
      style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, overflow: 'hidden' }}
    >
      <div className="preloader-inner" style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg
          ref={svgRef}
          className="preloader-svg"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            className="preloader-circle-bg"
          />
          <circle
            ref={progressRef}
            cx="60"
            cy="60"
            r="54"
            className="preloader-circle-progress"
          />
        </svg>

        <img
          src="/dog.png"
          alt="dog"
          className="preloader-dog"
        />
      </div>
      {/* Your name at the bottom center */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          color: "#ececec",
          fontFamily: "inherit",
          fontSize: "1rem",
          letterSpacing: "0.15em",
          opacity: 0.7,
          zIndex: 10000
        }}
      > 
      made by - syraxX
       
      </div>
    </div>
  );
};

export default Preloader;