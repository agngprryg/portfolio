import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed, pause }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);

      return () => clearTimeout(pauseTimeout);
    }
  }, [index, text, speed, pause]);

  return (
    <div className="font-extrabold">
      {displayedText}
      <span className="border-r-2 border-white animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
