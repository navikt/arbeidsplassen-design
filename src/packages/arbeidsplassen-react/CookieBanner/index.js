import {
  getUserActionTakenValue as originalGetUserActionTakenValue,
  getCookie as originalGetCookie,
  getConsentValues as originalGetConsentValues,
} from "./cookieUtils";

export { default as CookieBanner } from "./CookieBanner";

export const CookieBannerUtils = {
  getUserActionTakenValue: originalGetUserActionTakenValue,
  getCookie: originalGetCookie,
  getConsentValues: originalGetConsentValues,
};
