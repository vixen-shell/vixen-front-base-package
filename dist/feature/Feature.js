import { jsx as e } from "react/jsx-runtime";
import { useEffect as o } from "react";
import a from "./initFeature.js";
import f from "@vixen-front/ui";
function p({ content: r }) {
  o(a, []);
  let t = /* @__PURE__ */ e(f.ErrorFrame, {});
  if ("router" in r) {
    const u = /* @__PURE__ */ e(r.router.Provider, { children: /* @__PURE__ */ e(r.router.Route, {}) });
    if (r.globalState) {
      const i = () => u;
      t = /* @__PURE__ */ e(r.globalState.Provider, { children: /* @__PURE__ */ e(i, {}) });
    } else
      t = u;
  }
  return "feature" in r && (t = r.feature), t;
}
export {
  p as default
};
