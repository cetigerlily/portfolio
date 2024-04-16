import Link from "next/link";

export default function MenuTab({ title, link, color, textColor }) {
  return (
    <div className={`${color} h-screen content-center w-full`}>
      <Link href={`${link}`} style={{ textDecoration: "none" }}>
        <p
          className={`${textColor} text-cc-beige font-cocogoose-semi rotate-90 text-nowrap`}
        >
          {title}
        </p>
      </Link>
    </div>
  );
}
