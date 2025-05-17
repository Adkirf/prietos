import FullScreenMedia from "../FullScreenMedia";

import football from "../../../public/assets/banners/football.png";
import mob_football from "../../../public/assets/banners/mob_football.png";

const desktopSrc = football;
const mobileSrc = mob_football;

export default function VideoSection() {
  return (
    <section className="w-full !px-0 relative">
      <h2 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Are you one of them.
      </h2>
      <FullScreenMedia desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
    </section>
  );
}
