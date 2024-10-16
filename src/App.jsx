import { useState, useEffect, useRef } from "react";
import "./App.css";
import airpodImage from "./assets/images/nothingAirpod6.png";
import stereoImage from "./assets/images/stereoImage.png";
import stereoVideo from "./assets/images/stereoVideo.webm";
import whiteNothing from "./assets/images/whiteNothing.webp";

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
            <span className="explore"><h1>NOTHING</h1></span>
              <span className="sideViewImageContainer">
                <span className="sideViewImageContent"></span>
                <p>REVIEWS</p>
              </span>
            </div>
            <div className={`searchBar ${showTesting ? 'searchBarInView' : ''}`}>
              <input type="search" placeholder="Search"/>
              <span>o</span>

            </div>
            <div className={`leftSideView ${showTesting ? 'leftSideViewInView' : ''}`}>
              <h1>EXPLORE</h1>
              <span className="dummyFigure1">
                <div></div>
              </span>
              <span className="dummyFigure2">
                <div></div>
              </span>
            </div>
            <div className={`newrealms ${showTesting ? 'newrealmsInView' : ''}`}>
              <h1>OUR TECHNOLOGY TO <br /> TAKE MUSIC TO NEW <br /> REMLS</h1>
            </div>
            <div className={`littleDetails ${showTesting ? 'littleDetailsInView' : ''}`}>
              <div className="littleDetailsContainer">
              <div>
              <img src={whiteNothing} alt="" />
              </div>
              <div>
                {/* <span>HEAD ABOUT TIGS</span> */}
                <h1>UP TO F.F HOURS OF MUSIC POWERED</h1>
                <p>
                  Lorem ipsum dolor sit yuuhjh j
                  lorem ipsum dolor sit 
                  lorem ipsum dolor sit amemm
                  lorem ipsum dolor sit amem
                  lorem ipsum dolor sit amem uy qwjd ewfwek ewjfkew kfjewf 
                </p>
              </div>
              </div>
            </div>
            <div className={`speakers ${showTesting ? 'speakersInview' : ''}`}>
              <div>
                <img src={stereoImage} alt="" />
                <video src={stereoVideo} autoPlay loop muted></video>
                <img src={stereoImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
