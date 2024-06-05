import Link from "next/link";
import anime from "animejs";

export default function MenuTab({ title, link, color, textColor }) {
  // TODO: fix animation so that it only animates the indiv menutab which is hovered over, not all instances
  // const handleMouseEnter = () => {
  //   anime({
  //     targets: ".expandable",
  //     width: "150px", // Desired width on hover
  //     height: "100vh", // Desired height on hover
  //     easing: "easeInOutQuad",
  //     duration: 1000 // Animation duration
  //   });
  // };

  // const handleMouseLeave = () => {
  //   anime({
  //     targets: ".expandable",
  //     width: "100%", // Initial width
  //     height: "100vh", // Initial height
  //     easing: "easeInOutQuad",
  //     duration: 1000 // Animation duration
  //   });
  // };

  return (
    <div 
      className={`expandable ${color} h-screen flex content-end`} 
      style={{ width: "100px"}}
      // onMouseEnter={handleMouseEnter} 
      // onMouseLeave={handleMouseLeave}
    >
      <Link href={`${link}`} style={{ textDecoration: "none" }}>
        <p className={`${textColor} text-cc-beige font-cocogoose-semi rotate-90 text-nowrap`}>
          {title}
        </p>
      </Link>
    </div>
  );
}
