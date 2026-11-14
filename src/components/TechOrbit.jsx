
"use client";

import { useState } from "react";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const technologies = [
  {
    name: "ReactJS",
    code: "RE",
    img:<FaReact size={30} color="blue"/>,
    description: "Building reusable and interactive user interfaces."
  },
  {
    name: "Next.js",
    code: "NX",
    img:<RiNextjsLine size={30} color="white"/>,
    description: "Developing modern and optimized web applications."
  },
  {
    name: "Node.js",
    code: "ND",
    img:<FaNodeJs size={30} color="green"/>,
    description: "Building scalable server-side applications."
  },
  {
    name: "Express",
    code: "EX",
    img:<SiExpress size={30} color="red"/>,
    description: "Creating backend services and REST APIs."
  },
  {
    name: "MongoDB",
    code: "DB",
    img:<DiMongodb size={30} color="green"/>,
    description: "Working with NoSQL databases and data management."
  },
  {
    name: "Python",
    code: "PY",
    img:<FaPython size={30} color="yellow"/>,
    description: "Developing automation tools and AI applications."
  },
  {
    name: "JavaScript",
    code: "JS",
    img:<FaSquareJs size={30} color="orange"/>,
    description: "Creating dynamic and interactive applications."
  },
  {
    name: "Tailwind CSS",
    code: "TW",
    img:<RiTailwindCssFill size={30} color="indigo"/>,
    description: "Building responsive and consistent interfaces."
  }
];

export default function TechOrbit() {
  const [selected, setSelected] = useState(technologies[0]);

  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header shadow-md shadow-amber-50">
         
          <h2>My Tech Stack</h2>
        
        </div>

        <div className="tech-content">
          <div className="orbit">
            <div className="orbit-circle orbit-outer" />
            <div className="orbit-circle orbit-inner" />

            <div className="orbit-center">
              <span></span>
              <small className="text-white font-bold">TECH STACK</small>
            </div>

            <div className="orbit-track">
              {technologies.map((tech, index) => {
                const angle =
                  (index / technologies.length) * 360;

                return (
                  <div
                    key={tech.name}
                    className="orbit-position"
                    style={{
                      transform: `rotate(${angle}deg)`
                    }}
                  >
                    <button
                      type="button"
                      className={`orbit-item ${
                        selected.name === tech.name ? "selected" : ""
                      }`}
                      onClick={() => setSelected(tech)}
                      aria-label={`Select ${tech.name}`}
                      aria-pressed={selected.name === tech.name}
                    >
                      <span >{tech.img}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tech-details" key={selected.name}>
            <span className="details-label">CURRENT SELECTION</span>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>

            
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-section {
          padding: 100px 24px;
          background: #070b14;
          color: #fff;
          overflow: hidden;
        }

        .tech-container {
          max-width: 1100px;
          margin: auto;
        }

        .tech-header {
          text-align: center;
          margin-bottom: 65px;
        }

        .tech-header > span {
          color: #78aaff;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .tech-header h2 {
          font-size: clamp(30px, 5vw, 44px);
          font-weight: 700;
          margin: 14px 0 10px;
        }

        .tech-header p {
          color: #929caf;
          font-size: 14px;
        }

        .tech-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 100px;
          flex-wrap: wrap;
        }

        .orbit {
          width: 340px;
          height: 340px;
          position: relative;
          flex-shrink: 0;
        }

        .orbit-circle {
          position: absolute;
          border: 1px solid rgba(125, 160, 210, 0.18);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .orbit-outer {
          width: 88%;
          height: 88%;
        }

        .orbit-inner {
          width: 58%;
          height: 58%;
          border-style: dashed;
        }

        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 105px;
          height: 105px;
          border-radius: 50%;
          background: #101b2c;
          border: 1px solid #304968;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 7px;
          z-index: 2;
        }

        .orbit-center span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .orbit-center small {
          font-size: 8px;
          color: #8ba9ce;
          letter-spacing: 1.5px;
        }

        .orbit-track {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: orbitRotate 35s linear infinite;
        }

        .orbit-position {
          position: absolute;
          width: 42px;
          height: 42px;
          top: 50%;
          left: 50%;
          margin: -21px 0 0 -21px;
          transform-origin: center;
        }

        .orbit-item {
          position: absolute;
          top: -150px;
          left: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #111b2a;
          border: 1px solid #293b53;
          color: #aebdd0;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: counterRotate 35s linear infinite;
          transition: width 0.3s ease, height 0.3s ease,
            margin 0.3s ease, background 0.3s ease,
            border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .orbit-item.selected {
          width: 56px;
          height: 56px;
          margin: -7px;
          background: #1b3453;
          color: #fff;
          border-color: #78aaff;
          box-shadow: 0 0 20px rgba(120, 170, 255, 0.25);
          font-size: 13px;
        }

        .orbit-item:hover {
          border-color: #78aaff;
          color: #fff;
        }

        .tech-details {
          max-width: 300px;
          width: 100%;
          animation: fadeIn 0.3s ease;
        }

        .details-label {
          font-size: 10px;
          color: #78aaff;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .tech-details h3 {
          font-size: 32px;
          font-weight: 700;
          margin: 15px 0 10px;
        }

        .tech-details p {
          color: #929caf;
          font-size: 14px;
          line-height: 1.8;
        }

        .details-footer {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 25px;
          font-size: 12px;
          color: #aebdd0;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: #62c99b;
          border-radius: 50%;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .tech-section {
            padding: 70px 16px;
          }

          .tech-header {
            margin-bottom: 45px;
          }

          .tech-content {
            gap: 40px;
          }

          .orbit {
            width: min(320px, 90vw);
            height: min(320px, 90vw);
          }

          .orbit-item {
            top: calc(-44vw + 10px);
          }

          .tech-details {
            text-align: center;
          }

          .details-footer {
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-track,
          .orbit-item {
            animation: none;
          }

          .tech-details {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
