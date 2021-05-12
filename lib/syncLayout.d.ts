declare type Callback = () => void;
export declare const syncLayout: {
    prewrite: (callback?: Callback | undefined) => void;
    read: (callback?: Callback | undefined) => void;
    render: (callback?: Callback | undefined) => void;
    flush: () => void;
    jobLength: () => number[];
};
export declare function useSyncLayout(): void;
export {};
