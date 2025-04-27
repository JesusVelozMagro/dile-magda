import { useEffect } from 'react';

function AutoScroll() {
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      window.scrollBy({
        top: 1,       // 📜 Scroll 1 pixel down each interval
        behavior: 'smooth' // Smooth effect
      });
    }, 25); // ⏳ Every 10 milliseconds

    const stopScrolling = () => {
      clearInterval(scrollInterval); // 🛑 Stop the scroll
      window.removeEventListener('click', stopScrolling); // 🧹 Clean up the event listener
      window.removeEventListener('touchstart', stopScrolling);
    };

    window.addEventListener('click', stopScrolling); // 🖱️ On click, stop scrolling
    window.removeEventListener('touchstart', stopScrolling);

    return () => clearInterval(scrollInterval); // 🧹 Clean up when unmount
    window.removeEventListener('click', stopScrolling);
    window.removeEventListener('touchstart', stopScrolling);
  }, []);

  

  return null; // ⛔ Nothing is rendered
}

export default AutoScroll;
