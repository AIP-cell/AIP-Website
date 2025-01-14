import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import videoPlaySvg from "@public/svg/playButtonPurple.svg";
import { StorageUrl } from "@/utils/BaseUrl";
import ReactPlayer from "react-player";
import { ButtonAnimation } from "../animations/ButtonAnimation";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  video?: string;
  videoLink?: string;
  linkOrVideo?: string;
};
export default function CustomModal({
  isOpen,
  setIsOpen,
  video,
  videoLink,
  linkOrVideo,
}: Props) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-full  overflow-y-auto pt-[5.6rem]">
          <div className="flex h-full items-center justify-center ~p-2/4 ">
            <DialogPanel
              transition
              className="w-fit  rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className=" container relative flex justify-center items-center mx-auto">
                {linkOrVideo === "Video" ? (
                  <div className="shrink-0 w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[20.313rem] overflow-hidden rounded-lg">
                    <ReactPlayer
                      className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center cursor-pointer"
                      url={StorageUrl + video}
                      light="/images/upcoming.png"
                      playing
                      playIcon={
                        <ButtonAnimation>
                          <Image src={videoPlaySvg} alt="" className="" />
                        </ButtonAnimation>
                      }
                      controls
                    />
                    {/* <video className="z-10 border-2 absolute inset-0 w-full h-full ">
                      <source src={StorageUrl + video} type="video/mp4" />
                    </video> */}
                    {/* <Image
                      src={videoPlaySvg}
                      alt="play-svg"
                      className="z-50 cursor-pointer"
                    /> */}
                  </div>
                ) : (
                  <div className="~w-[18rem]/[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[25.313rem] overflow-hidden rounded-lg">
                    <ReactPlayer
                      className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center cursor-pointer"
                      url={StorageUrl + videoLink}
                      light="/images/upcoming.png"
                      playing
                      playIcon={
                        <ButtonAnimation>
                          <Image src={videoPlaySvg} alt="" className="" />
                        </ButtonAnimation>
                      }
                      controls
                    />
                    {/* <video className="z-10 border-2 absolute inset-0 w-full h-full ">
                      <source src={StorageUrl + video} type="video/mp4" />
                    </video> */}
                    <Image
                      src={videoPlaySvg}
                      alt="play-svg"
                      className="z-50 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
