export default {
  meEndpoint: process.env.NEXT_PUBLIC_BASE_URL + "/auth/validate",

  // loginEndpoint: '/jwt/login',
  loginEndpoint: process.env.NEXT_PUBLIC_BASE_URL + "/auth/login",
  registerEndpoint: "/jwt/register",
  storageTokenKeyName: "accessToken",
  onTokenExpiration: "logout", // logout | refreshToken
};
