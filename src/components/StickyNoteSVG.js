import styles from "./StickyNoteSVG.module.css";
import Draggable from "react-draggable";

export default function StickyNoteSVG({ color, shadowColor, translation }) {
  return (
    <Draggable bounds="parent">
      <div className="w-0 h-0">
        <svg width="200" height="200" viewBox="0 0 326 328">
          <g className={styles.stickynote} translate={translation}>
            <rect width="300" height="300" fill={color} />
            <path d="M300 300L244.5 300L300 249V300Z" fill={shadowColor} />
            <text
              fill="#363537"
              fontFamily="CocogooseProTrial"
              fontSize="20"
              fontWeight="200"
              letterSpacing="0em"
            >
              <tspan x="18" y="127.027">
                Lorem ipsum dolor sit{" "}
              </tspan>
              <tspan x="18" y="153.027">
                amet, consectetur{" "}
              </tspan>
              <tspan x="18" y="179.027">
                adipiscing elit.
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </Draggable>
  );
}
