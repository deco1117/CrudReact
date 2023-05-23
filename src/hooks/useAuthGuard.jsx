export const useGuard = () => {
  let token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();

    return false;
  }
  return true;
};
