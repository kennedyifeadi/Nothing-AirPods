import { useState, useEffect, useRef } from "react";
import "./App.css";
import airpodImage from "./assets/images/nothingAirpod4.png";

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showTesting, setShowTesting] = useState(false);
  const visibleElement = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (visibleElement.current) {
      observer.observe(visibleElement.current);
    }

    return () => {
      if (visibleElement.current) observer.unobserve(visibleElement.current);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      setShowTesting(true);
    }, 3000);
  }, []);

  return (
    <div className="body">
      <div
        ref={visibleElement}
        className={`initailLoadScreen ${
          isMounted ? "initailLoadScreenOutOfView" : ""
        }`}
      >
        <h1>NOTHING</h1>
      </div>

      <div className="main">
        <div className="container">
          <div className="containerChild">
            <div className={`testing ${showTesting ? "rotate" : ""}`}>
              <img src={airpodImage} alt="AirPods" />
            </div>
            <div className={`sideView ${showTesting ? 'sideviewVisible' : ''}`}>
            <span className="explore"><h1>EXPLORE</h1></span>
              <span className="sideViewImageContainer">
                <span className="sideViewImageContent"></span>
                <p>REVIEWS</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
