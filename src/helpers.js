export function GetName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.fullName : "";
}

export function Logout() {
  localStorage.clear();
}
