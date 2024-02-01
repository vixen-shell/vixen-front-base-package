import { jsx as c } from "react/jsx-runtime";
import { createContext as x, useState as l, useEffect as v, useContext as C } from "react";
import { ErrorFrame as _ } from "@vixen-front/ui";
function g() {
  const s = /* @__PURE__ */ (() => {
    let e = {};
    function o(t) {
      return t in e;
    }
    function r(t) {
      e = t;
    }
    function n(t) {
      return o(t) ? e[t] : /* @__PURE__ */ c(_, { message: u().error });
    }
    return {
      hasRoute: o,
      setRoutes: r,
      getRoute: n
    };
  })(), a = x({
    route: "",
    updateRoute: void 0,
    error: ""
  });
  function d({ children: e }) {
    const [o, r] = l(""), [n, t] = l(""), f = (i) => {
      const R = s.hasRoute(i) && i;
      R || t(`Route '${i}' not found.`), r(R ? i : "error");
    };
    return v(() => {
      f("main");
    }, []), /* @__PURE__ */ c(
      a.Provider,
      {
        value: {
          route: o,
          updateRoute: f,
          error: n
        },
        children: e
      }
    );
  }
  function u() {
    return C(a);
  }
  function m() {
    return s.getRoute(u().route);
  }
  function p({
    className: e,
    route: o,
    children: r
  }) {
    const { updateRoute: n } = u(), t = () => {
      n(o);
    };
    return /* @__PURE__ */ c(
      "div",
      {
        className: `ui_link ${e}`,
        style: { cursor: "pointer" },
        onClick: () => t(),
        children: r
      }
    );
  }
  return {
    Provider: d,
    setRoutes: s.setRoutes,
    useRouter: u,
    Route: m,
    Link: p
  };
}
const P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: g
}, Symbol.toStringTag, { value: "Module" }));
export {
  g as c,
  P as i
};
