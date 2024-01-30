/// <reference types="react" />
import type { RouterTypes, GlobalStateTypes } from '../types';
export declare function create(content: {
    router: RouterTypes.Router;
    globalState?: GlobalStateTypes.GlobalState;
} | {
    feature: JSX.Element;
}): import("react/jsx-runtime").JSX.Element;
