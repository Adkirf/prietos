import React from "react";

export default function ImageGallery({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => {
        if (item.type === "whitespace") {
          return (
            <div
              key={index}
              onMouseEnter={() =>
                console.log(`Hovered whitespace ${index + 1}`)
              }
              className={`
                col-span-${item.colSpan || 1} 
                row-span-${item.rowSpan || 1}
              `}
            />
          );
        }

        if (item.type === "text") {
          return (
            <div
              key={index}
              className={`
                col-span-${item.colSpan || 1} 
                row-span-${item.rowSpan || 1}
                flex items-center justify-center
                bg-gray-100 rounded-lg p-4
                text-center font-semibold text-gray-800
              `}
            >
              {item.text}
            </div>
          );
        }

        if (item.type === "image") {
          return (
            <div
              key={index}
              className={`
                col-span-${item.colSpan || 1} 
                row-span-${item.rowSpan || 1}
                overflow-hidden rounded-lg
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
