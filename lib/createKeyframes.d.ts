declare type CreateKeyframes = {
    sx: number;
    sy: number;
    dx?: number;
    dy?: number;
    easeFn: (x: number) => number;
    calculateInverse?: boolean;
};
export declare const createKeyframes: ({ sx, sy, dx, dy, easeFn, calculateInverse }: CreateKeyframes) => any;
export {};
