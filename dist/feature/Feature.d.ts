/// <reference types="react" />
import type { RouterTypes, GlobalStateTypes } from '../types';
interface FeatureProps {
    content: {
        router: RouterTypes.Router;
        globalState?: GlobalStateTypes.GlobalState;
    } | {
        feature: JSX.Element;
    };
}
export default function Feature({ content }: FeatureProps): JSX.Element;
export {};
