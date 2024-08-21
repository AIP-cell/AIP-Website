import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import React from "react";
const headerData = [
  {
    selectName: "About Us",
    width: " w-[6rem] ",
    options: [
      { option: "The AIP Journey" },
      { option: "Our Approach" },
      { option: "AIP Impact" },
      { option: "Giving Roadmap" },
      { option: "Financial Reports" },
      { option: "AIP Founder Network" },
      { option: "Philanthropist Network" },
    ],
  },
  {
    selectName: "People of AIP",
    width: " w-[8rem] ",
    options: [
      { option: "Our Offerings" },
      { option: "NPO Registry" },
      { option: "Projects and Programs" },
      { option: "Collaborations" },
    ],
  },
  {
    selectName: "Products & Services",
    width: " w-[10.5rem] ",
    options: [
      { option: "Our Offerings" },
      { option: "NPO Registry" },
      { option: "Projects and Programs" },
      { option: "Collaborations" },
    ],
  },
  {
    selectName: "Resource Center",
    width: " w-[9rem] ",
    options: [
      { option: "Our Offerings" },
      { option: "NPO Registry" },
      { option: "Projects and Programs" },
      { option: "Collaborations" },
    ],
  },
  { name: "Careers" },
  { name: "Contact" },
];
const Header = () => {
  return (
    <div className="flex justify-between py-[1.1rem] px-[1.25rem]">
      <div>
        <LogoHeaderSvg />
      </div>
      <div className="flex  gap-[2.5rem]">
        {headerData.map((items, index) => (
          <div key={index} className="flex  items-center ">
            {items.selectName && (
              <div className="flex gap-[2.5rem]">
                <select name={items.selectName} id="" className={items.width}>
                  <option selected>{items.selectName}</option>
                  {/* {items.options && */}
                  {/* <div className="flex flex-col gap-[1.625rem]"> */}
                  {items.options.map((opt, i) => (
                    <option
                      key={i}
                      value={items.selectName}
                      className="pt-[1.625rem]"
                    >
                      {opt.option}
                    </option>
                  ))}
                  {/* </div> */}
                  {/* } */}
                </select>
              </div>
            )}
            <div>{items.name}</div>
          </div>
        ))}
      </div>
      <div className=" flex  rounded-full border-2 border-darkPurple relative">
        <div className="rounded-full bg-darkPurple  px-[1.75rem] py-[0.75rem] ">
          <h3 className="text-white">Get Involved</h3>
        </div>
        <div className="bg-white rounded-tr-full rounded-br-full flex items-center justify-center">
          <div className="px-[1.46rem] ">
            <SearchHeaderSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
