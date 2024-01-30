/// <reference types="react" />
export declare namespace RouterTypes {
    type RouterContext = {
        route: string;
        updateRoute: ((key: string) => void) | undefined;
        error: string;
    };
    type Routes = {
        [key: string]: JSX.Element;
    };
    type Router = {
        Provider: ({ children }: {
            children: React.ReactNode;
        }) => JSX.Element;
        setRoutes: (routes: Routes) => void;
        useRouter: () => RouterContext;
        Route: () => JSX.Element;
        Link: ({ className, route, children, }: {
            className?: string | undefined;
            route: string;
            children: React.ReactNode;
        }) => JSX.Element;
    };
}
export declare namespace GlobalStateTypes {
    type State = {
        [key: string]: any;
    };
    type Actions = {
        [key: string]: string;
    };
    type GlobalState = {
        Provider: ({ children }: {
            children: React.ReactNode;
        }) => JSX.Element;
        use: () => {
            get: (key: string) => any;
            set: (key: string, value: any) => void;
        };
    };
}
