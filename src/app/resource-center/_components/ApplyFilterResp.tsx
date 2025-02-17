import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CrossSvg from "@/components/svg/CrossSvg";
import FilterDownArrowSvg from "@/components/svg/FilterDownArrowSvg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

type Props = {
  type: string;
  filterKey: string;
  optionsArray: any[];
  searchParams: Record<string, any>;
  setSelected: (value: string) => void;
  // setIsOpen: (value: boolean) => void;
  selected: any;
};
export function ApplyFilterResp({
  type,
  optionsArray,
  filterKey,
  searchParams,
  selected,
  setSelected,
}: // isOpen,
// setIsOpen,
Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    // e.preventDefault();
    // console.log("hiiiiiiiiii")
    const query = generatingSearchParam({
      ...searchParams,
      [filterKey]: selected.name ? selected._id : selected,
    });
    router.push(`?${query.toString()}`, {
      scroll: false,
    });
    setIsOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`border-2 border-[#DFE0E5] rounded-lg`}
      >
        <div
          className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] pr-[1.25rem] py-[0.75rem] items-center w-full justify-between `}
        >
          <p className="text-h9Copy5 leading-[1.225rem] capitalize">
            {type === "p_id"
              ? "Partner Type"
              : !selected
              ? type === "c_type"
                ? "Type Of Content"
                : type === "o_type"
                ? "Organization Type"
                : type
              : selected}
          </p>
          <div className="flex gap-[0.5rem] items-center">
            {selected && (
              <CrossSvg
                className=" size-[0.8rem] cursor-pointer"
                onClick={() => {
                  setSelected("");
                  setIsOpen(false);
                }}
              />
            )}
            <FilterDownArrowSvg className="size-[1.25rem]" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="block md:hidden fixed bottom-0 z-[8000] inset-x-0 w-full bg-white h-[80dvh] rounded-t-lg  px-[1.25rem] pt-[2rem] pb-[1.25rem] overflow-hidden ">
          <div className="pb-[2rem] ">
            <div className="pb-[0.773rem] border-b-[1.5px] text-h8Copy3 leading-[1.575rem] gap-[0.5rem] border-b-gray20 text-gray80 flex relative items-center justify-between">
              <div className="flex relative items-center gap-[0.5rem] text-h8Copy3 leading-[1.575rem]">
                <p className=" text-gray20">Filter By:</p>{" "}
                <div className="capitalize ">
                  {!selected
                    ? type === "c_type"
                      ? "Type Of Content"
                      : type === "o_type"
                      ? "Organization Type"
                      : type === "p_id"
                      ? "Partner Type"
                      : type
                    : selected}
                </div>
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className="flex justify-end"
              >
                <CrossSvg className=" size-[1rem] cursor-pointer" />
              </div>
            </div>
            <RadioGroup
              data-lenis-prevent
              className="flex flex-col px-[0.75rem] h-[57dvh] overflow-y-scroll no-scrollbar relative"
              defaultValue={selected}
              onValueChange={setSelected}
            >
              {optionsArray.map((items, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[0.938rem] py-[1.25rem]"
                >
                  <RadioGroupItem
                    value={items._id ? items._id : items}
                    id={items._id ? items._id : items}
                  />
                  <label
                    htmlFor={items._id ? items._id : items}
                    className="text-h9Copy5 leading-[1.225rem] text-gray80"
                  >
                    {items.name ? items.name : items}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className=" absolute bottom-[1.25rem] inset-x-0 px-[1.25rem]">
            <ButtonAnimation
              // type="submit"
              onClick={handleSubmit}
              className="py-[0.75rem] w-full rounded-full text-h9Copy5 leading-[1.225rem] text-white bg-darkPurple text-center"
            >
              Apply Filter
            </ButtonAnimation>
          </div>
        </div>
      )}
    </div>
  );
}
