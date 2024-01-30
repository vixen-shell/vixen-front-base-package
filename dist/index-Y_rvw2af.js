import { jsx as f } from "react/jsx-runtime";
import { createContext as y, useReducer as l, useContext as x } from "react";
function _(o) {
  const u = (() => {
    const e = {};
    for (const t in o)
      e[`update_${t}`] = t;
    return e;
  })();
  function s(e, t) {
    return t.type in u ? { ...e, [u[t.type]]: t.payload } : e;
  }
  const c = y(void 0);
  function i({ children: e }) {
    const [t, n] = l(s, o);
    return /* @__PURE__ */ f(c.Provider, { value: { state: t, dispatch: n }, children: e });
  }
  function d() {
    const { state: e, dispatch: t } = x(c);
    function n(r) {
      return e[r];
    }
    function p(r, a) {
      t({ type: `update_${r}`, payload: a });
    }
    return { get: n, set: p };
  }
  return {
    Provider: i,
    use: d
  };
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as c,
  b as i
};
