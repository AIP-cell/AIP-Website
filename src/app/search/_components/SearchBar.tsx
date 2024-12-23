"use client";
import CrossSvg from "@/components/svg/CrossSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = (props: {
  key?: string;
  searchParams: Record<string, any>;
}) => {
  const router = useRouter();
  const [key, setKey] = useState(props.key ?? "");
  const handleSearch = (event: any) => {
    event.preventDefault();
    const query = generatingSearchParam({
      ...props.searchParams,
      key: key,
    });
    router.push(`?${query.toString()}`, {
      scroll: false,
    });
    // router.push(
    //   "/search?" + new URLSearchParams({ ...props.searchParams, key: key })
    // );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full border-b-2 border-[#A0A3AD] flex items-center justify-between"
    >
      <input
        type="text"
        value={key ?? ""}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Search"
        className="text-h4 leading-[2.6rem] w-full font-playFair pb-[0.625rem] outline-none"
      />
      <div className="absolute right-0 flex gap-[1.5rem] text-textPurple">
        <div className="cursor-pointer" onClick={() => setKey("")}>
          <CrossSvg className="size-[1.5rem]" />
        </div>
        <button type="submit" onClick={handleSearch}>
          <SearchSvg className="size-[1.5rem]" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
