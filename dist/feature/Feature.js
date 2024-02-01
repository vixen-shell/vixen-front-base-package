import { jsx as e } from "react/jsx-runtime";
import { useEffect as i } from "react";
import a from "./initFeature.js";
import { ErrorFrame as f } from "@vixen-front/ui";
function p({ content: r }) {
  i(a, []);
  let t = /* @__PURE__ */ e(f, {});
  if ("router" in r) {
    const o = /* @__PURE__ */ e(r.router.Provider, { children: /* @__PURE__ */ e(r.router.Route, {}) });
    if (r.globalState) {
      const u = () => o;
      t = /* @__PURE__ */ e(r.globalState.Provider, { children: /* @__PURE__ */ e(u, {}) });
    } else
      t = o;
  }
  return "feature" in r && (t = r.feature), t;
}
export {
  p as default
};
