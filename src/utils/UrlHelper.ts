// Helper function to clean URLSearchParams
type CleanURLSearchParams = (params: Record<string, any>) => URLSearchParams;

export const cleanURLSearchParams: CleanURLSearchParams = (params) => {
  // Ensure the input is an object
  if (typeof params !== "object" || params === null) {
    throw new Error("Input must be a non-null object");
  }

  // Create a URLSearchParams instance from the object
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "undefined" && value !== null) {
      // Replace & with "and" in string values
      const sanitizedValue =
        typeof value === "string" ? value.replace(/&/g, "and") : value;

      // Append the sanitized key-value pair to URLSearchParams
      searchParams.append(key, String(sanitizedValue));
    }
  });

  return searchParams; // Return the cleaned URLSearchParams object
};

// Function to generate and clean search params
export const generatingSearchParam = (
  param: Record<string, any>
): URLSearchParams => {
  return cleanURLSearchParams(param); // Reuse the cleanURLSearchParams helper
};
