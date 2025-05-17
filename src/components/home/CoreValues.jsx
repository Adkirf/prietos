export default function CoreValues({}) {
  return (
    <section className="flex flex-col gap-8 overflow-hidden ">
      <div className="w-full h-12 md:px-8">
        <h3>
          At the heart of Prieto’s lie three{" "}
          <span className="text-image">Core Values.</span>
        </h3>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around gap-2">
        <div className="card min-w-1/3 flex flex-col gap-4">
          <h3 className="text-image">Quality.</h3>
          <p className="">
            Each collection is crafted from the finest materials, blending
            diverse textures to deliver an unparalleled tactile and visual
            experience.
          </p>
        </div>
        <div className="card min-w-1/3 flex flex-col gap-4">
          <h3 className="text-image">Design.</h3>
          <p className="">
            Every piece is meticulously curated, not just within a collection
            but across seasons, ensuring timeless elegance and classic
            combinations.
          </p>
        </div>
        <div className="card min-w-1/3 flex flex-col gap-4">
          <h3 className="text-image">Exclussive.</h3>
          <p className="">
            Our dedication to exclusivity and unique materials means each
            collection is produced in strictly limited quantities, underlining
            Prieto’s uniqueness.
          </p>
        </div>
      </div>
    </section>
  );
}
