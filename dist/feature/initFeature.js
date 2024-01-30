const e = (t) => {
  t.preventDefault();
}, r = () => (document.addEventListener("contextmenu", e), n), n = () => {
  document.removeEventListener("contextmenu", e);
};
export {
  r as default
};
