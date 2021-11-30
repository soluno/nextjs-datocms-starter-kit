/* eslint-disable jsx-a11y/alt-text */

import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const TextImageCopy = dynamic(() =>
  import("@/components/Molecules/TextImageCopy").then((c) => c.TextImageCopy)
);

export default function SectionTextImage(data) {
  console.log(data);
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="grid grid-cols-2 gap-10">
        <div
          className={` ${
            data.order == "Image first" ? "order-1" : "order-2"
          } col-span-2 lg:col-span-1`}
        >
          <Image classNameName={``} data={data.image} />
        </div>
        <div
          className={`${
            data.order == "Image first" ? "order-2" : "order-1"
          } col-span-2 md:col-span-1`}
        >
          <TextImageCopy data={data} />
        </div>
      </div>
    </section>
  );
}

export const fragment = `
    fragment TextImageFragment on SectionTextImageRecord{
      __typename
      title
      subtitle
      id
      cta {
        id
      }
      addHeader
      content
      order
      image {
        responsiveImage(imgixParams: {fit: crop, crop: focalpoint, auto:format, q:60, w: "1000", ar: "2:1"}) {
            src
        }
    }
  }
`;
