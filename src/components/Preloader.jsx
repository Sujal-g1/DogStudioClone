import { useEffect, useRef } from "react";

const Preloader = ({ onComplete }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    // trigger animation after mount
    requestAnimationFrame(() => {
      el.classList.add("slide-up");
    });

    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // match animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className="preloader fixed top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center z-[999]"
    >
      <h1 className="text-4xl tracking-widest">DOGSTUDIO</h1>
    </div>
  );
};

export default Preloader;