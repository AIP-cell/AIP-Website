export function reqAuthHeader() {
  return {
    headers: {
      Authorization: "bearer " + window.localStorage.accessToken,
    },
  };
}
