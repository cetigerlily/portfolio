import styles from "./ProjectSVG.module.css";
import Draggable from "react-draggable";

export default function ProjectSVG({ title, date, folderColor, textColor }) {
  return (
    <Draggable bounds="parent">
      <svg width="135" height="110" viewBox="0 0 270 220">
        <g className={styles.draggable}> 
          <rect y="20" width="270" height="200" fill={`${folderColor}`} />
          <path d="M19 0L0 20H93.5L73 0H19Z" fill={`${folderColor}`} />
          <text
            transform="translate(20 150)"
            fill={`${textColor}`}
            xmlSpace="preserve"
            className="font-cocogoose-semi text-[16px]"
          >
            <tspan>{title}</tspan>
          </text>
          <text
            transform="translate(20 180)"
            fill={`${textColor}`}
            xmlSpace="preserve"
            className="font-cocogoose-semi text-[16px]"
          >
            <tspan>{date}</tspan>
          </text>
        </g>
      </svg>
    </Draggable>
  );
}
