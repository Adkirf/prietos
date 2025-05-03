import FullScreenMedia from "../FullScreenMedia";

export default function VideoSection() {
  return (
    <section className="w-full !px-0 relative">
      <h2 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Are you one of them.
      </h2>
      <FullScreenMedia />
    </section>
  );
}
