import { reactLocalStorage as store } from "reactjs-localstorage";

const useAuth = () => {
  //!

  // const roles = JSON.parse(store.get("akRoles", null));

  // const containsRoles = (rolesToCheck) => rolesToCheck?.some((roleToCheck) => roles?.includes(roleToCheck));

  return {
    // permissions: JSON.parse(store.get("akPermissions", null)),
    // roles: roles,
    // hasRoles: containsRoles,
    accessToken: store.get("akAccessToken", ""),
    refreshToken: store.get("akRefreshToken", ""),
    isLoggedIn: store.get("akIsLoggedIn", false),
  };

  //!
};

export default useAuth;
