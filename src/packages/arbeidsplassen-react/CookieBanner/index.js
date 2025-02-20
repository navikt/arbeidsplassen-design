import {
  getUserActionTakenValue as originalGetUserActionTakenValue,
  getCookie as originalGetCookie,
} from "./cookieUtils";

export { default as CookieBanner } from "./CookieBanner";

export const CookieBannerUtils = {
  getUserActionTakenValue: originalGetUserActionTakenValue,
  getCookie: originalGetCookie,
};
