import { useEffect, useState } from "react";

const words = [
  "Full Stack Web Development.",
  "Mobile Application Development.",
  "AI / ML Development."
];

function Typewriter() {
  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseAfterType = 1800;

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // TYPING
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // PAUSE BEFORE DELETE
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      }
    } else {
      // DELETING
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h3 className="hero-job">
      {text}
      <span className="cursor"></span>
    </h3>
  );
}

export default Typewriter;
