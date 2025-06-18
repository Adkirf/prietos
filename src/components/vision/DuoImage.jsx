import duo1 from "../../../public/assets/images/duo-img1.png";
import duo2 from "../../../public/assets/images/duo-img2.png";

export default function DuoImage({}) {
  return (
    <section className="flex flex-row gap-1 justify-center items-center">
      <img
        src={duo1}
        alt="img"
        draggable={false}
        className="h-screen w-auto max-w-1/2 object-cover rounded-none"
      />
      <img
        src={duo2}
        alt="img"
        draggable={false}
        className="h-screen w-auto max-w-1/2 object-cover rounded-none"
      />
    </section>
  );
}
