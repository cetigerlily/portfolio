import StickyNoteSVG from "./StickyNoteSVG";
import Draggable from "react-draggable";

export default function StickyNoteBoard() {
  return (
    <div className="bg-cc-green w-[100%] h-[100%] p-[20px]" style={{ position: "relative" }}>
      <Draggable bounds="parent">
        <div className="bg-cc-blue-100 w-0 h-0">
          <StickyNoteSVG color="#fff9e7" shadowColor="#F1E7C9" translation="" />
        </div>
      </Draggable>
    </div>
  );
}
