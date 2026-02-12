"use client";

import CrossSvg from "../svg/CrossSvg";
import SearchSvg from "../svg/SearchSvg";
import { useRouter } from "@bprogress/next/app";
import { generatingSearchParam } from "@/utils/UrlHelper";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: Record<string, any>;
  q: string;
};
const CustomSearch = ({ q, searchParams }: Props) => {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const searchKeyword = e.currentTarget.search.value.trim();
        if (!searchKeyword) {
          return;
        }
        const query = generatingSearchParam({
          ...searchParams,
          q: searchKeyword,
        });
        router.push(`?${query.toString()}`, {
          scroll: false,
        });
      }}
    >
      <div className="border border-gray-400 rounded-full py-[0.7rem] px-5 flex gap-2">
        <input
          key={q}
          type="text"
          name="search"
          placeholder="Search"
          defaultValue={q}
          className="!ring-0 !border-none outline-none bg-transparent fill-transparent w-full text-h9Copy5 leading-[1.225rem]"
        />
        <div className="flex gap-[0.5rem] items-center">
          {!!q && (
            <CrossSvg
              role="button"
              className="size-[0.8rem] cursor-pointer"
              onClick={() => {
                const query = generatingSearchParam({
                  ...searchParams,
                  q: "",
                });
                router.push(`?${query.toString()}`, {
                  scroll: false,
                });
              }}
            />
          )}
          <button type="submit">
            <SearchSvg className="size-[1rem]" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default CustomSearch;
