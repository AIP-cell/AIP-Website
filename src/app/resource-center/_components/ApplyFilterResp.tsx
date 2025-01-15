import CrossSvg from "@/components/svg/CrossSvg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

type Props = {
  type: string;
  filterKey: string;
  optionsArray: any[];
  searchParams: Record<string, any>;
  // setSelected: (value: any) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
};
export function ApplyFilterResp({
  type,
  optionsArray,
  filterKey,
  searchParams,
  isOpen,
  setIsOpen,
}: Props) {
  // const searchParams = useSearchParams();
  // const domain = searchParams.get("domain");
  const [selectedFilter, setSelectedFilter] = useState<any>();
  const router = useRouter();
  // const category = searchParams.get("category");

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // console.log("hiiiiiiiiii")
    const query = generatingSearchParam({
      ...searchParams,
      [filterKey]: selectedFilter,
    });
    router.push(`?${query.toString()}`, {
      scroll: false,
    });
    setIsOpen(false);
  };
  return (
    <div className="block md:hidden fixed bottom-0 inset-x-0 w-full bg-white h-[80vh] rounded-t-lg  px-[1.25rem] pt-[2rem] pb-[1.25rem] z-[2000] overflow-y-auto overflow-hidden ">
      <form onSubmit={handleSubmit} className=" ">
        <div className="pb-[0.773rem] border-b-[1.5px] text-h8Copy3 leading-[1.575rem] gap-[0.5rem] border-b-gray20 text-gray80 flex relative items-center">
          <p className=" text-gray20">Filter By:</p> <div>{type}</div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <CrossSvg className="absolute right-0 size-[1rem] cursor-pointer" />
          </div>
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
