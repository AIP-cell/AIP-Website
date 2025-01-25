import Image from "next/image";
import React from "react";
import audio from "@public/images/aSample.png";
import cn from "@/utils/tailwind";
import PlaySvg from "@/components/svg/PlaySvg";
import { TGalleryImages, TSearch } from "@/api/type";
import { StorageUrl } from "@/utils/BaseUrl";

type Props = {
  index: number;
  searchData: TSearch[];
  galleryImages: TGalleryImages[];
  title: string;
  description: string;
};
const ContentGallery = ({
  searchData,
  index,
  galleryImages,
  title,
  description,
}: Props) => {
  const arrayLength = searchData.length;
  // const isEmptyParagraph = /^\s*<p>\s*<\/p>\s*$/i.test(description);
  return (
    <div className="pt-[1rem] ">
      <div className="flex flex-col ">
        <div
          className={cn("border-b-2 border-[#DFE0E5]", {
            "border-none pb-[7.46rem]": index === arrayLength - 1,
          })}
        >
          {title && title != "" && (
            <h3 className="~text-h5/h4a font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
              {title}
            </h3>
          )}
          {description &&  description != "" && (
            <div
              dangerouslySetInnerHTML={{
                __html: description || "",
              }}
              className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray"
            ></div>
          )}
          {galleryImages && (
            <div
              className={cn(
                "flex gap-[1.25rem] pt-[1rem] pb-[1.5rem] flex-col"
              )}
            >
              <div className="flex flex-wrap gap-[1.25rem]">
                {galleryImages.map((items, index) => (
                  <div
                    key={index}
                    className="~size-[10.3rem]/[11.87rem] relative rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={StorageUrl + items.image}
                      alt="gallery-images"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGallery;
