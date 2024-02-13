import { jsx as a } from "react/jsx-runtime";
import { createContext as x, useState as l, useEffect as g, useContext as P } from "react";
import { ErrorFrame as h } from "@vixen-front/ui";
function v() {
  const c = /* @__PURE__ */ (() => {
    let e = {};
    function o(t) {
      return t in e;
    }
    function n(t) {
      e = t;
    }
    function u(t) {
      return o(t) ? e[t] : /* @__PURE__ */ a(h, { message: i().error });
    }
    return {
      hasRoute: o,
      setRoutes: n,
      getRoute: u
    };
  })(), f = x({
    route: "",
    updateRoute: void 0,
    error: ""
  });
  function m({ children: e }) {
    const [o, n] = l(""), [u, t] = l(""), R = (r) => {
      const s = c.hasRoute(r) && r;
      s || t(`Route '${r}' not found.`), n(s ? r : "error");
    };
    return g(() => {
      function r() {
        return new URLSearchParams(window.location.search).get("route");
      }
      const s = r();
      R(s || "main");
    }, []), /* @__PURE__ */ a(
      f.Provider,
      {
        value: {
          route: o,
          updateRoute: R,
          error: u
        },
        children: e
      }
    );
  }
  function i() {
    return P(f);
  }
  function d() {
    return c.getRoute(i().route);
  }
  function p({
    className: e,
    route: o,
    children: n
  }) {
    const { updateRoute: u } = i(), t = () => {
      u(o);
    };
    return /* @__PURE__ */ a(
      "div",
      {
        className: `ui_link ${e}`,
        style: { cursor: "pointer" },
        onClick: () => t(),
        children: n
      }
    );
  }
  return {
    Provider: m,
    setRoutes: c.setRoutes,
    useRouter: i,
    Route: d,
    Link: p
  };
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: v
}, Symbol.toStringTag, { value: "Module" }));
export {
  v as c,
  w as i
};
