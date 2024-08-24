import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import React from "react";
const headerData = [
  {
    selectName: "About Us",
    width: " tw-w-[6rem] ",
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
    width: " tw-w-[8rem] ",
    options: [
      { option: "Our Offerings" },
      { option: "NPO Registry" },
      { option: "Projects and Programs" },
      { option: "Collaborations" },
    ],
  },
  {
    selectName: "Products & Services",
    width: " tw-w-[10.5rem] ",
    options: [
      { option: "Our Offerings" },
      { option: "NPO Registry" },
      { option: "Projects and Programs" },
      { option: "Collaborations" },
    ],
  },
  {
    selectName: "Resource Center",
    width: " tw-w-[9rem] ",
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
    <div className="tw-flex tw-justify-between tw-py-[1.1rem] tw-px-[1.25rem]">
      <div>
        <LogoHeaderSvg />
      </div>
      <div className="tw-flex tw-gap-[2.5rem]">
        {headerData.map((items, index) => (
          <div key={index} className="tw-flex  tw-items-center ">
            {items.selectName && (
              <div className="tw-flex tw-gap-[2.5rem]">
                <select name={items.selectName} id="" className={items.width}>
                  <option selected>{items.selectName}</option>
                  {/* {items.options && */}
                  {/* <div className="flex flex-col gap-[1.625rem]"> */}
                  {items.options.map((opt, i) => (
                    <option
                      key={i}
                      value={items.selectName}
                      className="tw-pt-[1.625rem]"
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
      <div className=" tw-flex  tw-rounded-full tw-border-2 tw-border-darkPurple vrelative">
        <div className="tw-rounded-full tw-bg-darkPurple  tw-px-[1.75rem] tw-py-[0.75rem] ">
          <h3 className="tw-text-white">Get Involved</h3>
        </div>
        <div className="tw-bg-white tw-rounded-tr-full tw-rounded-br-full tw-flex tw-items-center tw-justify-center">
          <div className="tw-px-[1.46rem] ">
            <SearchHeaderSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
