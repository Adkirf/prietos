import Header from "../../components/Header";
import Hero from "../../components/home/Hero";
import CollectionTitle from "../../components/CollectionTitle";
import CollectionGallery from "../../components/exclussive-success/CollectionGallery";

import { ImageCarussel } from "../../components/ImageSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MockCollection = {
  name: "Exclussive Success",
  main_image: "../../../public/assets/images/exclussive_succes.png",
  main_image_mobile:
    "../../../public/assets/images/exclussive_succes_mobile.png",
  pieces: [
    {
      name: "Heart Printed Jacket",
      main_image: "../../../public/assets/images/img_1.png",
      current_stock: 400,
      max_stock: 500,
    },
    {
      name: "Gold Marked Jeans",
      main_image: "../../../public/assets/images/img_2.png",
      current_stock: 500,
      max_stock: 500,
    },
    {
      name: "Blue Federed Hody",
      main_image: "../../../public/assets/images/img_3.png",
      current_stock: 450,
      max_stock: 500,
    },
  ],
  images: [
    {
      id: 0,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/1.png",
      width: 400,
      height: 300,
      alt: "Product view 1",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: 1,
      type: "whitespace",
      colSpan: 4,
      rowSpan: 3,
    },
    {
      id: 2,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/2.png",
      width: 300,
      height: 600,
      alt: "Product view 2",
      colSpan: 1,
      rowSpan: 5,
    },
    {
      id: 3,
      type: "text",
      text: "Premium Quality Materials",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 4,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/3.png",
      width: 500,
      height: 250,
      alt: "Product view 3",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 5,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/4.png",
      width: 350,
      height: 350,
      alt: "Product view 4",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 6,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/5.png",
      width: 600,
      height: 300,
      alt: "Product view 5",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 7,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/6.png",
      width: 250,
      height: 500,
      alt: "Product view 6",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: 8,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/7.png",
      width: 400,
      height: 400,
      alt: "Product view 7",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 9,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/8.png",
      width: 450,
      height: 200,
      alt: "Product view 8",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 10,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/9.png",
      width: 450,
      height: 200,
      alt: "Product view 9",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 11,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/10.png",
      width: 450,
      height: 200,
      alt: "Product view 10",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 12,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/11.png",
      width: 450,
      height: 200,
      alt: "Product view 11",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 13,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/12.png",
      width: 450,
      height: 200,
      alt: "Product view 12",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 14,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/13.png",
      width: 450,
      height: 200,
      alt: "Product view 13",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 15,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/14.png",
      width: 450,
      height: 200,
      alt: "Product view 14",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 16,
      type: "image",
      src: "../../../public/assets/images/exclussive-success/15.png",
      width: 450,
      height: 200,
      alt: "Product view 15",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
};

export default function ExclussiveSuccessPage() {
  const imagesSec = [
    MockCollection.pieces[0].main_image,
    MockCollection.pieces[1].main_image,
    MockCollection.pieces[2].main_image,
  ];

  return (
    <>
      <Header />
      <div className="h-[100vh] relative -z-1">
        <Hero
          isFixed={false}
          desktopSrc={MockCollection.main_image}
          mobileSrc={MockCollection.main_image_mobile}
        />
      </div>
      <div className="py-[25vh]">
        <CollectionTitle />
        <div className="flex flex-col w-full justify-center items-center">
          <h3 className="text-image mt-8">Exclussive Success.</h3>
          <h4 className="mb-0">A tribute to professionals around the globe.</h4>
        </div>
      </div>

      <ImageCarussel imageSequence={imagesSec} />

      <div className="mx-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className="h-1 w-full border-b border-text-primary " />
            <AccordionTrigger>
              <h3>Pieces</h3>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <div className="h-1 w-full border-b border-text-primary " />
          </AccordionItem>
        </Accordion>
      </div>

      <CollectionGallery items={MockCollection.images} />
    </>
  );
}
