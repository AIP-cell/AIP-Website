import cn from "@/utils/tailwind";

type Props = {
  currentTab: string;
  tabClassName?: string;
  mainClassName?: string;
  filteredName?: string;
  tabListClassName?: string;
  setOpenTab: (value: string) => void;
  tabList: { slug: string; key: string; name: string }[];
};
const PeopleOfAipTabs = ({
  currentTab,
  tabList,
  tabListClassName,
  tabClassName,
  mainClassName,
  setOpenTab,
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "z-[200] w-full flex justify-center items-center ~pt-8/[4.75rem] ",
          mainClassName
        )}
      >
        <div className="flex w-full justify-center">
          <div
            className={cn(
              "z-[200] flex bg-[#F0F0F2] p-1 rounded-full w-fit",
              tabListClassName
            )}
          >
            {tabList.map((items, i) => (
              <div
                onClick={() => {
                  setOpenTab(items.slug);
                }}
                key={i}
                className={cn(
                  "~px-[1.5rem]/[2.5rem] py-[0.75rem] flex justify-center items-center ~text-h10Copy6/h9Copy5 ~leading-[1rem]/[1.22rem] font-inter ",
                  tabClassName,
                  {
                    "!bg-darkPurple !text-white !outline-none !rounded-full":
                      items.slug === currentTab,
                  }
                )}
              >
                {items.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleOfAipTabs;
