import Cookies from "js-cookie";
const useCookie = () => {
  const acc_cookie = process.env.GOOGLE_TOKEN_COOKIE;
  const setCookie = (tokenAccount) => {
    Cookies.set("accountToken", tokenAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const getCookie = () => {
    return Cookies.get("accountToken");
  };
  const removeCookie = () => {
    return Cookies.remove("accountToken");
  };
  const isLoggedIn = () => !!getCookie();
  return {
    setCookie,
    getCookie,
    removeCookie,
    isLoggedIn,
  };
};

export default useCookie;
