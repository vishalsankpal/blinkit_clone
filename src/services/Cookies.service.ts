import Cookies from "js-cookie";

const setDataInCookie = (
  key: string,
  value: string,
  options?: Cookies.CookieAttributes
) => Cookies.set(key, value, options);

const getDataFromCookie = (key: string): string | undefined => Cookies.get(key);

const clearCookie = (key: string) => Cookies.remove(key);

const clearAllCookie = () => {
  const cookies = Object.keys(Cookies.get());
  cookies.forEach((cookie) => Cookies.remove(cookie));
};

export { setDataInCookie, getDataFromCookie, clearCookie, clearAllCookie };
