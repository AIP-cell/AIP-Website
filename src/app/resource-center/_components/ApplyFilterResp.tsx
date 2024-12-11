import CrossSvg from "@/components/svg/CrossSvg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

type Props = {
  type: string;
  optionsArray: any[];
  setSelected: (value: any) => void;
  setIsOpen: (value: boolean) => void;
  selected: string;
};
export function ApplyFilterResp({
  type,
  optionsArray,
  setSelected,
  setIsOpen,
  selected,
}: Props) {
  const [selectedFilter, setSelectedFilter] = useState<any>(selected);
  //   console.log("selectedFilter::::", selectedFilter);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSelected(selectedFilter);
    setIsOpen(false);
  };
  return (
    <div className="block md:hidden fixed bottom-0 inset-x-0 w-full bg-white h-[80vh] rounded-t-lg  px-[1.25rem] pt-[2rem] pb-[1.25rem] z-[2000] overflow-y-auto overflow-hidden ">
      <form onSubmit={handleSubmit} className=" ">
        <div className="pb-[0.773rem] border-b-[1.5px] text-h8Copy3 leading-[1.575rem] gap-[0.5rem] border-b-gray20 text-gray80 flex relative items-center">
          <p className=" text-gray20">Filter By:</p> <div>{type}</div>
          <CrossSvg
            onClick={() => setIsOpen(false)}
            className="absolute right-0 size-[1rem] cursor-pointer"
          />
        </div>
        <RadioGroup
          className="flex flex-col px-[0.75rem] h-[55vh] overflow-y-scroll no-scrollbar relative"
          defaultValue={selectedFilter}
          onValueChange={setSelectedFilter}
        >
          {optionsArray.map((items, index) => (
            <div
              key={index}
              className="flex items-center gap-[0.938rem] py-[1.25rem]"
            >
              <RadioGroupItem value={items} id={items} />
              <label
                htmlFor={items}
                className="text-h9Copy5 leading-[1.225rem] text-gray80"
              >
                {items}
              </label>
            </div>
          ))}
        </RadioGroup>
        <div className="pt-[2rem]">
          <button
            type="submit"
            className="py-[0.75rem] w-full rounded-full text-h9Copy5 leading-[1.225rem] text-white bg-darkPurple text-center"
          >
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
}
