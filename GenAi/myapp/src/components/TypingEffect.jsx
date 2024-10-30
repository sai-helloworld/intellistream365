// import React, { useState, useEffect } from "react";

// const TypingEffect = () => {
//   const phrases = [
//     "Want to Enroll in a course?",
//     "Want to Enroll in an Internship?",
//     "Want to use our API?",
//   ];

//   const [text, setText] = useState("");
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const typingSpeed = 150; // Typing speed in ms
//   const deletingSpeed = 100; // Deleting speed in ms
//   const delayBetweenPhrases = 2000; // Delay before switching phrases in ms

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentPhrase = phrases[currentPhraseIndex];

//       if (!isDeleting) {
//         // Typing the text
//         setText((current) => current + currentPhrase[current.length]);
//         if (text === currentPhrase) {
//           setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
//         }
//       } else {
//         // Deleting the text
//         setText((current) => current.slice(0, -1));
//         if (text === "") {
//           setIsDeleting(false);
//           setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
//         }
//       }
//     };

//     const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
//     const typingTimeout = setTimeout(handleTyping, typingDelay);

//     return () => clearTimeout(typingTimeout);
//   }, [text, isDeleting, currentPhraseIndex]);

//   return (
//     <p className="contactSection_2 servicesHeading2 subHeadings">
//       {text}
//       <span className="cursor">|</span>
//     </p>
//   );
// };

// export default TypingEffect;
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const phrases = [
    "Want to Enroll in a course?",
    "Want to Enroll in an Internship?",
    "Want to use our API's?",
  ];

  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 100; // Deleting speed in ms
  const delayBetweenPhrases = 2000; // Delay before switching phrases in ms

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        // Typing the text
        setText((current) => currentPhrase.slice(0, current.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        // Deleting the text
        setText((current) => current.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimeout = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, currentPhraseIndex]);

  return (
    <p className="contactSection_2 servicesHeading2 subHeadings">
      {text}
      <span className="cursor">|</span>
    </p>
  );
};

export default TypingEffect;
