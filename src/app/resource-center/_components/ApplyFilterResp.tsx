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
    <div className="tw-block md:tw-hidden tw-fixed tw-bottom-0 tw-inset-x-0 tw-w-full tw-bg-white tw-h-[80vh] tw-rounded-t-lg  tw-px-[1.25rem] tw-pt-[2rem] tw-pb-[1.25rem] tw-z-[2000] tw-overflow-y-auto tw-overflow-hidden ">
      <form onSubmit={handleSubmit} className=" ">
        <div className="tw-pb-[0.773rem] tw-border-b-[1.5px] tw-text-h8Copy3 tw-leading-[1.575rem] tw-gap-[0.5rem] tw-border-b-gray20 tw-text-gray80 tw-flex tw-relative tw-items-center">
          <p className=" tw-text-gray20">Filter By:</p> <div>{type}</div>
          <CrossSvg
            onClick={() => setIsOpen(false)}
            className="tw-absolute tw-right-0 tw-size-[1rem] tw-cursor-pointer"
          />
        </div>
        <RadioGroup
          className="tw-flex tw-flex-col tw-px-[0.75rem] tw-h-[55vh] tw-overflow-y-scroll no-scrollbar tw-relative"
          defaultValue={selectedFilter}
          onValueChange={setSelectedFilter}
        >
          {optionsArray.map((items, index) => (
            <div
              key={index}
              className="tw-flex tw-items-center tw-gap-[0.938rem] tw-py-[1.25rem]"
            >
              <RadioGroupItem value={items} id={items} />
              <label
                htmlFor={items}
                className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-gray80"
              >
                {items}
              </label>
            </div>
          ))}
        </RadioGroup>
        <div className="tw-pt-[2rem]">
          <button
            type="submit"
            className="tw-py-[0.75rem] tw-w-full tw-rounded-full tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-white tw-bg-darkPurple tw-text-center"
          >
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
}
