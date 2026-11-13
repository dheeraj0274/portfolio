
"use client";

import { useEffect, useState } from "react";

const DigitalUniverseIntro = () => {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setLeaving(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3300);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        zIndex: 2147483647,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at center, #101d35 0%, #080e1b 45%, #03050a 100%)",
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* Stars */}
      <div className="stars">
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 17) % 100}%`,
              animationDelay: `${(i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Digital Universe */}
      <div className="scene">
        <div className="glow" />

        <div className="planet">
          <div className="surface" />
          <div className="grid-lines" />
          <div className="shine" />
        </div>

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <div className="particles">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <style jsx>{`
        .stars {
          position: absolute;
          inset: 0;
        }

        .stars span {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #d8eaff;
          box-shadow: 0 0 8px #78baff;
          animation: twinkle 2s infinite alternate;
        }

        .scene {
          position: relative;
          width: min(90vw, 440px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: cameraZoom 3.2s cubic-bezier(0.5, 0, 0.2, 1) forwards;
        }

        .glow {
          position: absolute;
          width: 75%;
          height: 75%;
          border-radius: 50%;
          background: #2879d8;
          filter: blur(95px);
          opacity: 0.25;
        }

        .planet {
          position: relative;
          width: 52%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          box-shadow:
            inset -22px -10px 40px #020817,
            inset 8px 4px 30px #8acaff,
            0 0 35px #358fe866;
          animation: planetRotate 18s linear infinite;
        }

        .surface {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 25%, #a9dfff55, transparent 24%),
            radial-gradient(circle at 70% 70%, #2875c955, transparent 30%),
            linear-gradient(135deg, #173a62, #071326 65%, #020711);
        }

        .grid-lines {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background:
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 19px,
              #8ccfff66 20px,
              transparent 21px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 19px,
              #8ccfff66 20px,
              transparent 21px
            );
          opacity: 0.65;
          transform: perspective(180px) rotateY(-12deg);
        }

        .shine {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid #a8dcff99;
          background: linear-gradient(
            120deg,
            #b9e5ff22,
            transparent 40%,
            #02081788
          );
        }

        .orbit {
          position: absolute;
          width: 88%;
          height: 34%;
          border: 1px solid #85caff77;
          border-radius: 50%;
          box-shadow: 0 0 12px #4b9eff33;
        }

        .orbit-one {
          transform: rotate(-25deg);
          animation: orbitOne 12s linear infinite;
        }

        .orbit-two {
          width: 100%;
          height: 42%;
          transform: rotate(55deg);
          border-color: #a3d7ff55;
          animation: orbitTwo 16s linear infinite;
        }

        .orbit-three {
          width: 76%;
          height: 65%;
          transform: rotate(75deg);
          border-color: #5b9cdb44;
          animation: orbitOne 20s linear infinite reverse;
        }

        .particles i {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b9e4ff;
          box-shadow: 0 0 12px 3px #64b8ff;
        }

        .particles i:nth-child(1) {
          top: 16%;
          left: 22%;
        }

        .particles i:nth-child(2) {
          top: 73%;
          left: 13%;
        }

        .particles i:nth-child(3) {
          top: 20%;
          right: 15%;
        }

        .particles i:nth-child(4) {
          bottom: 15%;
          right: 20%;
        }

        .particles i:nth-child(5) {
          top: 48%;
          right: 3%;
        }

        .particles i:nth-child(6) {
          top: 45%;
          left: 4%;
        }

        @keyframes planetRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitOne {
          from {
            rotate: 0deg;
          }
          to {
            rotate: 360deg;
          }
        }

        @keyframes orbitTwo {
          from {
            rotate: 360deg;
          }
          to {
            rotate: 0deg;
          }
        }

        @keyframes twinkle {
          from {
            opacity: 0.2;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cameraZoom {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          20% {
            transform: scale(1);
            opacity: 1;
          }
          75% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .planet,
          .orbit,
          .stars span,
          .scene {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalUniverseIntro;
