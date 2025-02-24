"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CrossSvg from "@/components/svg/CrossSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next-nprogress-bar";
import React, { useState } from "react";

const SearchBar = (props: { searchParams: Record<string, any> }) => {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState(props.searchParams.key ?? ""); // Avoid using 'key' as a state variable

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = generatingSearchParam({
      ...props.searchParams,
      key: searchKey,
    });

    router.push(`?${query.toString()}`, { scroll: false });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full border-b-2 border-[#A0A3AD] flex items-center justify-between"
    >
      <input
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search"
        className="text-h4 leading-[2.6rem] w-full font-playFair pb-[0.625rem] outline-none"
      />
      <div className="absolute right-0 flex gap-[1.5rem] text-textPurple">
        {/* Clear input */}
        <ButtonAnimation
          className="cursor-pointer"
          type="button"
          onClick={() => {
            const query = generatingSearchParam({
              ...props.searchParams,
              key: "",
            });

            router.push(`?${query.toString()}`, { scroll: false });
          }}
        >
          <CrossSvg className="size-[1.5rem]" />
        </ButtonAnimation>

        {/* Submit button (NO onClick needed, form handles submission) */}
        <ButtonAnimation className="cursor-pointer" type="submit">
          <SearchSvg className="size-[1.5rem]" />
        </ButtonAnimation>
      </div>
    </form>
  );
};

export default SearchBar;
