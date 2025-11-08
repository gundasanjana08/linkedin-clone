// frontend/src/utils/auth.js

// Check if the user is logged in (token exists)
export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
