import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const hideCursor = () => setIsHidden(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-accent transition-all duration-150 ease-out hidden md:block ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "w-10 h-10" : "w-6 h-6"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[100] rounded-full bg-accent transition-opacity duration-150 hidden md:block ${
          isHidden ? "opacity-0" : "opacity-100"
        } w-1.5 h-1.5`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}

export default Cursor;
