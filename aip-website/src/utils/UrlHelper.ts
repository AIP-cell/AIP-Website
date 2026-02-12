/* eslint-disable @typescript-eslint/no-explicit-any */
type CleanURLSearchParams = (params: Record<string, any>) => URLSearchParams;

export const cleanURLSearchParams: CleanURLSearchParams = (params) => {
  if (typeof params !== "object" || params === null) {
    throw new Error("Input must be a non-null object");
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "undefined" && value !== null) {
      const sanitizedValue =
        typeof value === "string" ? value.replace(/&/g, "and") : value;

      searchParams.append(key, String(sanitizedValue));
    }
  });

  return searchParams;
};

export const generatingSearchParam = (
  param: Record<string, any>
): URLSearchParams => {
  return cleanURLSearchParams(param);
};
